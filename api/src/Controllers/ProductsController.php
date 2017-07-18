<?php
namespace BarbecueOrders\Controllers;

use BarbecueOrders\Controllers\AppController;

class ProductsController extends AppController
{

    protected $product;

    public function __construct($repository)
    {
        $this->product = $repository;
        parent::__construct();
    }

    public function index($request, $response)
    {
        return $response->withJson($this->product->findAll());
    }
}
