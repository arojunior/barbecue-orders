<?php
namespace BarbecueOrders\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use BarbecueOrders\Repositories\ProductsRepository;

class ProductsController extends AppController
{

    protected $product;

    public function __construct(ProductsRepository $repository)
    {
        parent::__construct();
        $this->product = $repository;
    }

    public function index(Request $request, Response $response): Response
    {
        return $this->withJson($response, $this->product->findAll());
    }
}
