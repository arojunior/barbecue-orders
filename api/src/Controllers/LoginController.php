<?php
namespace BarbecueOrders\Controllers;

use BarbecueOrders\Controllers\AppController;

class LoginController extends AppController
{

    protected $user;

    public function __construct($usersRepository)
    {
        $this->user = $usersRepository;
        parent::__construct();
    }

    public function index($request, $response)
    {
        $data = $request->getParsedBody();

        $token = $this->user->login($data);

        return (isset($token['error'])
                ? $this->errorHandler->toJson($token['error'], $response)
                : $response->withJson($token)
            );
    }
}
