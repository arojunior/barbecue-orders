<?php

namespace BarbecueOrders\Controllers;

use BarbecueOrders\Controllers\AppController;
use BarbecueOrders\Repositories\UsersRepository;

class UsersController extends AppController
{

    protected $user;

    public function __construct()
    {
        $this->user = new UsersRepository;
    }

    public function add($request, $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $this->user->create($data);

        if ( ! $id) {
            return $response->withStatus($this->user->error['code'])
                            ->withJson(['error' => $this->user->error]);
        }

        return $response->withJson(['id' => $id]);
    }

}
