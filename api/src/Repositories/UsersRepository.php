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

    public function create(array $data) : array
    {
        if (self::checkIfExists($data)) {
            return $this->errorHandler->emit('USER_ALREADY_EXISTS');
        }

        $data = $this->user->checkFormFields($data);

        $this->user->save($this->user->hashPassword($data));
        return ['id' => $this->user->lastSavedId()];
    }

    public function update(array $data) : array
    {
        $data = $this->user->checkFormFields($data);

        if ($this->user->checkEmailEdit($data)) {
            return $this->errorHandler->emit('USER_ALREADY_EXISTS');
        }

        if ($data['password']) {
            $data = $this->user->hashPassword($data);
        }

        $this->user->save($data);
        return ['id' => $this->user->lastSavedId()];
    }

    public function find(int $id) : array
    {
        return $this->user->findOne($id);
    }

    public function login(array $data) : array
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
        return $this->user->exists(['email' => $data['email']]);
    }

}
