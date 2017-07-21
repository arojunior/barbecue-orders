<?php
// DIC configuration

$container = $app->getContainer();

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

/*
* Services
*/
$container['errorHandler'] = function ($c) {
    return new BarbecueOrders\Libs\Errors();
};

$container['SessionMiddleware'] = function ($c) {
    return new BarbecueOrders\Libs\SessionMiddleware;
};

$container['UsersRepository'] = function ($c) {
    $model = new BarbecueOrders\Models\User();
    $errorHandler = $c->get('errorHandler');
    return new BarbecueOrders\Repositories\UsersRepository($model, $errorHandler);
};

$container['CompaniesRepository'] = function ($c) {
    $model = new BarbecueOrders\Models\Company();
    $errorHandler = $c->get('errorHandler');
    return new BarbecueOrders\Repositories\CompaniesRepository($model, $errorHandler);
};

$container['ProductsRepository'] = function ($c) {
    $model = new BarbecueOrders\Models\Product();
    return new BarbecueOrders\Repositories\ProductsRepository($model);
};

$container['OrdersRepository'] = function ($c) {
    $order = new BarbecueOrders\Models\Order();
    $item = new BarbecueOrders\Models\OrderItem();
    return new BarbecueOrders\Repositories\OrdersRepository($order, $item);
};

/*
* Controllers as Services
*/
$container['\BarbecueOrders\Controllers\UsersController'] = function ($c) {
    $repository = $c->get('UsersRepository');
    return new BarbecueOrders\Controllers\UsersController($repository);
};

$container['\BarbecueOrders\Controllers\CompaniesController'] = function ($c) {
    $repository = $c->get('CompaniesRepository');
    return new BarbecueOrders\Controllers\CompaniesController($repository);
};

$container['\BarbecueOrders\Controllers\ProductsController'] = function ($c) {
    $repository = $c->get('ProductsRepository');
    return new BarbecueOrders\Controllers\ProductsController($repository);
};

$container['\BarbecueOrders\Controllers\LoginController'] = function ($c) {
    $repository = $c->get('UsersRepository');
    return new BarbecueOrders\Controllers\LoginController($repository);
};

$container['\BarbecueOrders\Controllers\OrdersController'] = function ($c) {
    $repository = $c->get('OrdersRepository');
    return new BarbecueOrders\Controllers\OrdersController($repository);
};
