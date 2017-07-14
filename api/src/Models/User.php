<?php
namespace BarbecueOrders\Models;

use BarbecueOrders\Models\App;

class User extends App
{

    protected $table = 'users';
    protected $pk = 'email';

}
