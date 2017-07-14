<?php
namespace BarbecueOrders\Models;

use SimpleORM\core\model\Model;

class App extends Model
{

    public $db_config;

    public function __construct()
    {
        $this->db_config = [
            'db_host' => 'mysql',
            'db_name' => 'mydb',
            'db_user' => 'user',
            'db_pass' => 'user'
        ];

        parent::__construct();
    }

}
