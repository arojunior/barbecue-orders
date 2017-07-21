<?php
namespace BarbecueOrders\Models;

use BarbecueOrders\Models\App;
use Firebase\JWT\JWT;

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

    public function makeToken($user)
    {
        $data = $this->tokenData($user);
        $jwt = $this->tokenConfig();

        $token = JWT::encode(
            $data,
            $jwt['key'],
            $jwt['algorithm']
        );

        return  ['token' => $token];
    }

    public function checkFormFields($data)
    {
        if (isset($data['password_confirm'])) {
            unset($data['password_confirm']);
        }

        if (empty($data['password'])) {
            unset($data['password']);
        }

        return $data;
    }

    public function checkEmailEdit($data)
    {
        return !empty($this->query("
                    SELECT email
                    FROM users
                    WHERE
                        email='".$data['email']."' AND
                        id <> ".$data['id']."
                "));
    }

    public function tokenConfig()
    {
        return [
            'key'       => 'soulfly',
            'algorithm' => 'HS256'
        ];
    }

    public function tokenData($user)
    {
        return [
            'iat'  => 1356999524,
            'nbf'  => 1357000000,
            'iss'  => 'arojunior.github.io',
            'data' => [
                    'id'    => $user['id'],
                    'email' => $user['email']
                ]
        ];
    }

}
