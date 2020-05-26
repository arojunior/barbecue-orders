<?php
namespace BarbecueOrders\Repositories\Contracts;

interface OrdersInterface
{

    function create(int $company_id): int;

    function addItems(int $order_id, array $items);

    function delete(int $id);
}
