<?php

namespace BarbecueOrders\Controllers;

use BarbecueOrders\Controllers\AppController;

class UsersController extends AppController
{

    protected $user;

    public function __construct($repository)
    {
        $this->user = $repository;
        parent::__construct();
    }

    public function add($request, $response, $args)
    {
        $data = $request->getParsedBody();
        $user = $this->user->create($data);

        return ($user['error']
                ? $this->errorHandler->toJson($user['error'], $response)
                : $response->withJson(['id' => $user['id']])
            );
    }

}
