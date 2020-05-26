<?php
namespace BarbecueOrders\Repositories\Contracts;

interface UsersInterface
{

  function create(array $data): array;

  function update(array $data): array;

  function find(int $id): array;

  function login(array $data): array;

}
