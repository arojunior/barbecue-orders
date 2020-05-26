<?php
namespace BarbecueOrders\Models;

class User extends AppModel
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

}
