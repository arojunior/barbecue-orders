<?php
use Slim\App;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

return function (App $app) {
    $app->get('/', function (Request $request, Response $response): Response {
        $response->getBody()->write('Hello, World!');
        return $response;
    });

    $app->post('/login', 'BarbecueOrders\Controllers\LoginController:index');
    $app->post('/users', 'BarbecueOrders\Controllers\UsersController:add');
    $app->put('/users/{id}', '\BarbecueOrders\Controllers\UsersController:edit');
    $app->post('/companies', '\BarbecueOrders\Controllers\CompaniesController:add');
    $app->get('/companies/orders', '\BarbecueOrders\Controllers\CompaniesController:orders');
    $app->get('/companies/{id}/orders', '\BarbecueOrders\Controllers\CompaniesController:ordersByCompany');
    $app->get('/products', '\BarbecueOrders\Controllers\ProductsController:index');
    $app->post('/orders', '\BarbecueOrders\Controllers\OrdersController:add');
    $app->delete('/orders/{id}', '\BarbecueOrders\Controllers\OrdersController:delete');
};

