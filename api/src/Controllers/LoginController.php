<?php
namespace BarbecueOrders\Controllers;

class LoginController
{

    public function index($request, $response)
    {
        return $response->withJson([
            'token' => '123'
        ]);
    }
}
