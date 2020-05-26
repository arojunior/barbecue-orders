<?php
namespace BarbecueOrders\Repositories;

use BarbecueOrders\Repositories\Contracts\ProductsInterface;
use BarbecueOrders\Models\Product;

class ProductsRepository implements ProductsInterface
{

    protected $product;

    public function __construct(Product $model)
    {
        $this->product = $model;
    }

    public function findAll() : array
    {
        return $this->product->findAll();
    }

}
