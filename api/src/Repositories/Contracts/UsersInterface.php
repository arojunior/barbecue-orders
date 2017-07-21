<?php
namespace BarbecueOrders\Repositories\Contracts;

interface UsersInterface
{

  public function create(array $data) : array;

  public function update(array $data) : array;

  public function find(int $id) : array;

  public function login(array $data) : array;

}
