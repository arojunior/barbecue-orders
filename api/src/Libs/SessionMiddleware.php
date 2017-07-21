<?php
namespace BarbecueOrders\Libs;

use Firebase\JWT\JWT;
use BarbecueOrders\Models\User;

class SessionMiddleware
{

    protected $path = array();
    protected $userModel;

    public function __invoke($request, $response, $next)
    {
        $route = $request->getUri()->getPath();

        if ( ! $this->allowedRoute($route) && !$request->isOptions()) {
            return $this->checkSession($request, $response, $next);
        }

        return $next($request, $response);
    }

    public function __construct($path)
    {
        $this->path = $path;
        $this->userModel = new User();
    }

    private function allowedRoute($uri)
    {
        return in_array($uri, $this->path);
    }

    private function getTokenFromHeader($request)
    {
        $auth = function() use ($request) {
            $authorization = $request->getHeader('Authorization');

            if (isset($authorization[0])) {
                $authHeader = explode(' ', $authorization[0]);
                $authType = $authHeader[0];
                $token = $authHeader[1];
                return $token;
            }
            return false;
        };

        return $auth();
    }

    private function checkSession($request, $response, $next)
    {
        $token = $this->getTokenFromHeader($request);

        if ($token) {
            $jwt = $this->userModel->tokenConfig();
            $decodedToken = JWT::decode($token, $jwt['key'], array($jwt['algorithm']));
        }

        if ( ! isset($decodedToken)) {
            return $response->withStatus(401)
                            ->withJson(['error' => 'Sorry, Dude. You can\'t go through without a valid token']);
        }

        return $next($request, $response);
    }
}
