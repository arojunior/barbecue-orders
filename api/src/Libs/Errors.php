<?php
namespace BarbecueOrders\Libs;

use Psr\Http\Message\ResponseInterface as Response;

abstract class Errors
{
    private static $exceptions = [
            'USER_ALREADY_EXISTS' => [
                'error' => [
                    'code' => 409,
                    'msg' => 'This user already exists'
                ]
            ],
            'COMPANY_ALREADY_EXISTS' => [
                'error' => [
                    'code' => 409,
                    'msg' => 'This company already exists'
                ]
            ],
            'LOGIN_ERROR' => [
                'error' => [
                    'code' => 401,
                    'msg' => 'Wrong username or password!'
                ]
            ]
        ];


    public function get($id)
    {
        return self::$exceptions[$id];
    }

    public function toJson(Response $response, array $error)
    {
        $response->getBody()->write(json_encode($error));

        return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus($error['code']);
    }
}
