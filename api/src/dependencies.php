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

$container['UsersRepository'] = function ($c) {
    $model = new BarbecueOrders\Models\User();
    $errorHandler = new BarbecueOrders\Libs\Errors();
    return new BarbecueOrders\Repositories\UsersRepository($model, $errorHandler);
};

$container['\BarbecueOrders\Controllers\UsersController'] = function ($c) {
    $repository = $c->get('UsersRepository');
    return new BarbecueOrders\Controllers\UsersController($repository);
};
