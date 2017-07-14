<?php
namespace BarbecueOrders\Controllers;

use BarbecueOrders\Repositories\UsersRepository;

class UsersController
{

    protected $user;

    public function __construct()
    {
        $this->user = new UsersRepository;
    }

    public function add($request, $response)
    {
        $data = $request->getParsedBody();
        $id = $this->user->create($data);

        if ( ! $id) {
            return $response->withStatus(409)
                            ->withJson(['error' => $this->user->error]);
        }

        return $response->withJson(['id' => $id]);
    }

}
