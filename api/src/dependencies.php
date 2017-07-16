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

$container['errorHandler'] = function ($c) {
    return new BarbecueOrders\Libs\Errors();
};

$container['UsersRepository'] = function ($c) {
    $model = new BarbecueOrders\Models\User();
    $errorHandler = $c->get('errorHandler');
    return new BarbecueOrders\Repositories\UsersRepository($model, $errorHandler);
};

$container['\BarbecueOrders\Controllers\UsersController'] = function ($c) {
    $repository = $c->get('UsersRepository');
    return new BarbecueOrders\Controllers\UsersController($repository);
};

$container['\BarbecueOrders\Controllers\LoginController'] = function ($c) {
    $repository = $c->get('UsersRepository');
    return new BarbecueOrders\Controllers\LoginController($repository);
};
