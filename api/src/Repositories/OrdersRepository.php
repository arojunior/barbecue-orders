<?php
namespace BarbecueOrders\Repositories;

use BarbecueOrders\Repositories\Contracts\OrdersInterface;
use BarbecueOrders\Models\Order;
use BarbecueOrders\Models\OrderItem;

class OrdersRepository implements OrdersInterface
{

    protected $order;
    protected $item;

    public function __construct(Order $order, OrderItem $item)
    {
        $this->order = $order;
        $this->item = $item;
    }

    public function create(int $company_id): int
    {
        $this->order->create([
            'company_id' => $company_id
        ]);

        return $this->order->lastSavedId();
    }

    public function delete(int $id)
    {
        return $this->order->delete([
            'id' => $id
        ]);
    }

    public function addItems(int $order_id, array $items)
    {
        $itemsModel = $this->item;

        $addItems = function($item) use ($order_id, $itemsModel) {
            return $itemsModel->create([
                'order_id' => $order_id,
                'product_id' => $item['id'],
                'quantity' => $item['quantity']
            ]);
        };

        return array_map($addItems, $items);
    }

}
