<?php
namespace BarbecueOrders\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use BarbecueOrders\Repositories\UsersRepository;
use BarbecueOrders\Libs\Errors;

class UsersController extends AppController
{
    protected $user;

    public function __construct(UsersRepository $repository)
    {
        parent::__construct();
        $this->user = $repository;
    }

    public function add(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody();

        if (empty($data)) {
            return $response->withStatus(400);
        }

        $user = $this->user->create($data);

        if ($user['error']) {
            return Errors::toJson($response, $user['error']);
        }

        return $this->withJson($response, ['id' => $user['id']]);
    }

    public function edit(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody();

        $user = $this->user->update($data);

        return $this->withJson($response, [
            'id' => $user['id'],
            'email' => $data['email']
        ]);
    }

}
