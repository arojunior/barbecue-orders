<?php
namespace BarbecueOrders\Repositories\Contracts;

interface OrdersInterface
{

    public function create(int $company_id) : int;

    public function addItems(int $order_id, array $items);

    public function delete(int $id);
}
