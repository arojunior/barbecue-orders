<?php
namespace BarbecueOrders\Repositories;

use BarbecueOrders\Repositories\Contracts\OrdersInterface;

class OrdersRepository implements OrdersInterface
{

    protected $order;
    protected $item;

    public function __construct($order, $item)
    {
        $this->order = $order;
        $this->item = $item;
    }

    public function create(int $company_id) : int
    {
        $this->order->create([
            'company_id' => $company_id
        ]);

        return $this->order->lastSavedId();
    }

    public function addItems($order_id, $items)
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
