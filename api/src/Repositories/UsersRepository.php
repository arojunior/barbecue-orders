<?php
namespace BarbecueOrders\Repositories;

use BarbecueOrders\Models\User;
use BarbecueOrders\Repositories\Contracts\UsersInterface;

class UsersRepository implements UsersInterface
{

    protected $user;
    public $error;

    public function __construct()
    {
        $this->user = new User;
    }

    public function create($data)
    {
        if (self::checkIfUserExists($data)) {
            $this->error = $this->user->errors->emit('USER_ALREADY_EXISTS');
            return false;
        }

        $this->user->save(self::hashPassword($data));
        return $this->user->lastSavedId();
    }

    public function find($id)
    {
        return $this->user->findOne($id);
    }

    private function checkIfUserExists($data)
    {
        $email = $data['email'];
        return $this->user->exists($email);
    }

    private function hashPassword($data)
    {
        return array_merge(
            $data,
            ['password' => password_hash($data['password'], PASSWORD_DEFAULT)]
        );
    }

}
