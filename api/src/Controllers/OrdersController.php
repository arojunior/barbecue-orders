<?php
namespace BarbecueOrders\Controllers;

use BarbecueOrders\Controllers\AppController;

class OrdersController extends AppController
{

    protected $order;

    public function __construct($repository)
    {
        $this->order = $repository;
        parent::__construct();
    }

    public function add($request, $response)
    {
        $data = $request->getParsedBody();

        $order = $this->order->create($data['order_company']);
        $this->order->addItems($order, $data['order_items']);

        return $response->withJson(['id' => $order]);
    }

}
