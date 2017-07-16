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

        $user = $this->user->login($data);

        return ($user['error']
                ? $this->errorHandler->toJson($user['error'], $response)
                : $response->withJson(['id' => $user['id']])
            );
    }
}
