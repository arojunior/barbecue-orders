<?php
namespace BarbecueOrders\Libs;

class Errors
{

    public function emit($id)
    {
        $exceptions = [
            'USER_ALREADY_EXISTS' => [
                'code' => 409,
                'msg' => 'This user already exists'
            ]
        ];

        return $exceptions[$id];
    }
}
