<?php
// Routes

$app->get('/', function ($request, $response) {
    // Sample log message
    $this->logger->info("BarbecueOrders '/' route");

    return $this->response->withJson(['HelloWorld' => 'We are Alive!']);
});

$app->post('/login', '\BarbecueOrders\Controllers\LoginController:index');
$app->post('/users', '\BarbecueOrders\Controllers\UsersController:add');
$app->put('/users/{id}', '\BarbecueOrders\Controllers\UsersController:edit');
$app->post('/companies', '\BarbecueOrders\Controllers\CompaniesController:add');
$app->post('/companies/orders', '\BarbecueOrders\Controllers\CompaniesController:orders');
