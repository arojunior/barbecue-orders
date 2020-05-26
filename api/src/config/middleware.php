<?php
use Slim\App;
use Slim\Middleware\ErrorMiddleware;
use BarbecueOrders\config\CorsMiddleware;
use Psr\Http\Server\RequestHandlerInterface as Handler;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Routing\RouteContext;

return function (App $app) {

    // Parse json, form data and xml
    $app->addBodyParsingMiddleware();

    // Cors
    $app->options('/{routes:.+}', function (Request $request, Response $response): Response {
        return $response;
    });

    // This middleware will append the response header Access-Control-Allow-Methods with all allowed methods
    $app->add(function (Request $request, Handler $handler): Response {
        $routeContext = RouteContext::fromRequest($request);
        $routingResults = $routeContext->getRoutingResults();
        $methods = $routingResults->getAllowedMethods();
        $requestHeaders = $request->getHeaderLine('Access-Control-Request-Headers');

        $response = $handler->handle($request);

        $response = $response->withHeader('Access-Control-Allow-Origin', '*');
        $response = $response->withHeader('Access-Control-Allow-Methods', implode(',', $methods));
        $response = $response->withHeader('Access-Control-Allow-Headers', $requestHeaders);

        // Optional: Allow Ajax CORS requests with Authorization header
        $response = $response->withHeader('Access-Control-Allow-Credentials', 'true');

        return $response;
    });

    // Add the Slim built-in routing middleware
    $app->addRoutingMiddleware();

    // Catch exceptions and errors
    $app->add(ErrorMiddleware::class);

//    $allowedRoutes = [
//        '/users',
//        '/login'
//    ];

//    $app->add(new BarbecueOrders\Libs\SessionMiddleware($allowedRoutes));
};


