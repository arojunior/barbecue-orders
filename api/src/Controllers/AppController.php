<?php
namespace BarbecueOrders\Controllers;

use Psr\Http\Message\ResponseInterface as Response;

class AppController
{

    public function __construct()
    {

    }

    public function withJson(Response $response, $content, $code = 200): Response
    {
        $response->getBody()->write(json_encode($content));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus($code);
    }
}
