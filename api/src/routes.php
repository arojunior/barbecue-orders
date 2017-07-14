<?php
// Routes

$app->get('/', function ($request, $response) {
    // Sample log message
    $this->logger->info("BarbecueOrders '/' route");

    return $this->response->withJson(['HelloWorld' => 'We are Alive!']);
});

$app->post('/users', '\BarbecueOrders\Controllers\UsersController:add');
