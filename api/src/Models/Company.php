<?php
namespace BarbecueOrders\Models;

use BarbecueOrders\Models\App;

class Company extends App
{

    protected $table = 'companies';

    public function companiesAndOrders()
    {
        return $this->query("
            SELECT
                companies.name,
                companies.eni,
                count(orders.id) as 'orders'
            FROM companies
            INNER JOIN orders ON companies.id = orders.company_id
            GROUP BY orders.company_i
            ");
    }
}
