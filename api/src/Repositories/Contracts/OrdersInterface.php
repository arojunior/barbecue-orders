<?php
namespace BarbecueOrders\Repositories\Contracts;

interface OrdersInterface
{

    public function create(int $company_id) : int;
}
