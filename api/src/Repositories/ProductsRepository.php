<?php
namespace BarbecueOrders\Repositories;

use BarbecueOrders\Repositories\Contracts\ProductsInterface;

class ProductsRepository implements ProductsInterface
{

    protected $product;

    public function __construct($model)
    {
        $this->product = $model;
    }

    public function findAll() : array
    {
        return $this->product->findAll();
    }

}
