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
}
