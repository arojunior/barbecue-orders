<?php
namespace BarbecueOrders\Libs;

class Errors
{
    protected $exceptions = [
            'USER_ALREADY_EXISTS' => [
                'error' => [
                    'code' => 409,
                    'msg' => 'This user already exists'
                ]
            ],
            'LOGIN_ERROR' => [
                'error' => [
                    'code' => 401,
                    'msg' => 'Wrong username or password!'
                ]
            ]
        ];


    public function emit($id)
    {
        return $this->exceptions[$id];
    }

    public function toJson($e, $response)
    {
        return $response->withStatus($e['code'])->withJson($e);
    }
}
