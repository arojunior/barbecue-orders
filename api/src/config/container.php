<?php
use Psr\Container\ContainerInterface;
use Selective\Config\Configuration;
use Slim\App;
use Slim\Factory\AppFactory;
use Slim\Middleware\ErrorMiddleware;
use BarbecueOrders\Controllers\UsersController;
use BarbecueOrders\Controllers\CompaniesController;
use BarbecueOrders\Controllers\ProductsController;
use BarbecueOrders\Repositories\UsersRepository;
use BarbecueOrders\Controllers\LoginController;
use BarbecueOrders\Controllers\OrdersController;
use BarbecueOrders\Repositories\CompaniesRepository;
use BarbecueOrders\Repositories\ProductsRepository;
use BarbecueOrders\Repositories\OrdersRepository;
use BarbecueOrders\Models\User;
use BarbecueOrders\Models\Product;
use BarbecueOrders\Models\Order;
use BarbecueOrders\Models\OrderItem;
use BarbecueOrders\Models\Company;

return [
    Configuration::class => function () {
        return new Configuration(require __DIR__ . '/settings.php');
    },

    App::class => function (ContainerInterface $container) {
        AppFactory::setContainer($container);
        $app = AppFactory::create();

        // monolog
        $container->set('logger', function (ContainerInterface $c) {
            $settings = $c->get('settings')['logger'];
            $logger = new Monolog\Logger($settings['name']);
            $logger->pushProcessor(new Monolog\Processor\UidProcessor());
            $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
            return $logger;
        });

        /*
        * Repositories
        */
        $container->set('UsersRepository', function () {
            $userModel = new User();
            return new UsersRepository($userModel);
        });

        $container->set('CompaniesRepository', function () {
            $companiesModel = new Company();
            return new CompaniesRepository($companiesModel);
        });

        $container->set('ProductsRepository', function () {
            $productsModel = new Product();
            return new ProductsRepository($productsModel);
        });

        $container->set('OrdersRepository', function () {
            $order = new Order();
            $orderItem = new OrderItem();
            return new OrdersRepository($order, $orderItem);
        });

        /*
        * Controllers
        */
        $container->set('\BarbecueOrders\Controllers\UsersController', function (ContainerInterface $c) {
            $usersRepository = $c->get('UsersRepository');
            return new UsersController($usersRepository);
        });

        $container->set('\BarbecueOrders\Controllers\CompaniesController', function (ContainerInterface $c) {
            $companiesRepository = $c->get('CompaniesRepository');
            return new CompaniesController($companiesRepository);
        });

        $container->set('\BarbecueOrders\Controllers\ProductsController',  function (ContainerInterface $c) {
            $productsRepository = $c->get('ProductsRepository');
            return new ProductsController($productsRepository);
        });

        $container->set('\BarbecueOrders\Controllers\LoginController', function (ContainerInterface $c) {
            $loginRepository = $c->get('UsersRepository');
            return new LoginController($loginRepository);
        });

        $container->set('\BarbecueOrders\Controllers\OrdersController', function (ContainerInterface $c) {
            $ordersRepository = $c->get('OrdersRepository');
            return new OrdersController($ordersRepository);
        });

        return $app;
    },

    ErrorMiddleware::class => function (ContainerInterface $container) {
        $app = $container->get(App::class);
        $settings = $container->get(Configuration::class)->getArray('error_handler_middleware');

        return new ErrorMiddleware(
            $app->getCallableResolver(),
            $app->getResponseFactory(),
            (bool)$settings['display_error_details'],
            (bool)$settings['log_errors'],
            (bool)$settings['log_error_details']
        );
    },

];





