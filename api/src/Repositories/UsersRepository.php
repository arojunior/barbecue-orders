<?php
namespace BarbecueOrders\Repositories;

use BarbecueOrders\Repositories\Contracts\UsersInterface;
use BarbecueOrders\Models\User;
use BarbecueOrders\Libs\Errors;

class UsersRepository implements UsersInterface
{

    protected $user;

    public function __construct(User $model)
    {
        $this->user = $model;
    }

    public function create(array $data) : array
    {
        if (self::checkIfExists($data)) {
            return Errors::get('USER_ALREADY_EXISTS');
        }

        $data = $this->user->checkFormFields($data);

        $this->user->save($this->user->hashPassword($data));
        return ['id' => $this->user->lastSavedId()];
    }

    public function update(array $data) : array
    {
        $data = $this->user->checkFormFields($data);

        if ($this->user->checkEmailEdit($data)) {
            return Errors::get('USER_ALREADY_EXISTS');
        }

        if (isset($data['password']) && !empty($data['password'])) {
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
            return Errors::get('LOGIN_ERROR');
        }

        if ( ! $this->user->validatePassword($data)) {
            return Errors::get('LOGIN_ERROR');
        }

        return $this->user->fetch();
    }

    public function checkIfExists($data)
    {
        return $this->user->exists(['email' => $data['email']]);
    }

}
