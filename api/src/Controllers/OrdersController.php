<?php
namespace BarbecueOrders\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use BarbecueOrders\Repositories\OrdersRepository;

class OrdersController extends AppController
{

    protected $order;

    public function __construct(OrdersRepository $repository)
    {
        $this->order = $repository;
        parent::__construct();
    }

    public function add(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody();

        $order = $this->order->create($data['order_company']);
        $this->order->addItems($order, $data['order_items']);

        return $this->withJson($response, ['id' => $order]);
    }

    public function delete(Request $request, Response $response): Response
    {
        $route = $request->getAttribute('route');
        $id = $route->getArgument('id');

        $this->order->delete($id);

        return $this->withJson($response, ['id' => $id]);
    }

}
