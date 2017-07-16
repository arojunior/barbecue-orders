<?php
namespace BarbecueOrders\Controllers;

use BarbecueOrders\Libs\Errors;

class AppController
{

    public $errorHandler;

    public function __construct()
    {
        $this->errorHandler = new Errors;
    }
}
