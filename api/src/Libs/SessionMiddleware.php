<?php
namespace BarbecueOrders\Libs;

class SessionMiddleware
{

    protected $path = array();

    public function __invoke($request, $response, $next)
    {
        $route = $request->getUri()->getPath();

        if (!$this->allowedRoute($route)) {
            $this->checkSession($request, $response);
        }

        return $next($request, $response);
    }

    public function __construct($path)
    {
        $this->path = $path;
    }

    private function allowedRoute($uri)
    {
        return in_array($uri, $this->path);
    }

    private function checkSession($request, $response)
    {
        return $response;
    }
}
