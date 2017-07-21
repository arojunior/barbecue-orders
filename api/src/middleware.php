<?php
// Application middleware

$allowedRoutes = [
    '/users',
    '/login'
];

$app->add(new BarbecueOrders\Libs\SessionMiddleware($allowedRoutes));
