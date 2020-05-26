<?php
namespace BarbecueOrders\Models;

class Company extends AppModel
{

    protected $table = 'companies';

    public function companiesAndOrders()
    {
        return $this->query("
                SELECT
                    companies.id,
                    companies.name,
                    companies.eni,
                    count(orders.id) as 'orders'
                FROM companies
                LEFT JOIN orders ON companies.id = orders.company_id
                GROUP BY companies.id
                ORDER BY 'orders'
            ");
    }

    public function ordersByCompany($id)
    {
        $company = $this->findById($id);
        $orders = $this->query("
                    SELECT
                        orders.id as order_id,
                    	products.id as product_id,
                    	products.description,
                    	items.quantity
                    FROM orders
                    INNER JOIN orders_items items ON
                    	items.order_id = orders.id
                    INNER JOIN products ON
                    	products.id = items.product_id
                    WHERE
                    	orders.company_id = {$id}
                    ");

        return [
            'company' => $company,
            'orders' => $orders
        ];
    }
}
