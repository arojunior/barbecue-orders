<?php
namespace BarbecueOrders\Models;

use BarbecueOrders\Models\App;

class User extends App
{

    protected $table = 'users';

    public function validatePassword($data)
    {
        return (password_verify($data['password'], $this->fetch()['password']));
    }

    public function hashPassword($data)
    {
        return array_merge(
            $data,
            ['password' => password_hash($data['password'], PASSWORD_DEFAULT)]
        );
    }

}
