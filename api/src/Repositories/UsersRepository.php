<?php
namespace BarbecueOrders\Repositories;

use BarbecueOrders\Repositories\Contracts\UsersInterface;

class UsersRepository implements UsersInterface
{

    protected $user;
    protected $errorHandler;

    public function __construct($model, $errorHandler)
    {
        $this->user = $model;
        $this->errorHandler = $errorHandler;
    }

    public function create($data)
    {
        if (self::checkIfExists($data)) {
            return $this->errorHandler->emit('USER_ALREADY_EXISTS');
        }

        $this->user->save($this->user->hashPassword($data));
        return $this->user->lastSavedId();
    }

    public function find($id)
    {
        return $this->user->findOne($id);
    }

    public function login($data)
    {
        if ( ! self::checkIfExists($data)) {
            return $this->errorHandler->emit('LOGIN_ERROR');
        }

        if ( ! $this->user->validatePassword($data)) {
            return $this->errorHandler->emit('LOGIN_ERROR');
        }

        return $this->user->fetch();
    }

    public function checkIfExists($data)
    {
        $email = $data['email'];
        return $this->user->exists($email);
    }

}
