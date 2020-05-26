<?php
namespace BarbecueOrders\Controllers;

use BarbecueOrders\Libs\Errors;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use BarbecueOrders\Repositories\UsersRepository;

class LoginController extends AppController
{

    protected $user;

    public function __construct(UsersRepository $usersRepository)
    {
        parent::__construct();
        $this->user = $usersRepository;
    }

    public function index(Request $request, Response $response)
    {
        $data = $request->getParsedBody();

        $user = $this->user->login($data);

        if ($user['error']) {
            return Errors::toJson($response, $user['error']);
        }

        return $this->withJson($response, [
            'id' => $user['id'],
            'email' => $data['email']
        ]);
    }
}
