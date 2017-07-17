<?php
namespace BarbecueOrders\Repositories;

use BarbecueOrders\Repositories\Contracts\CompaniesInterface;

class CompaniesRepository implements CompaniesInterface
{

    protected $company;
    protected $errorHandler;

    public function __construct($model, $errorHandler)
    {
        $this->company = $model;
        $this->errorHandler = $errorHandler;
    }

    public function create(array $data) : array
    {
        if (self::checkIfExists($data)) {
            return $this->errorHandler->emit('COMPANY_ALREADY_EXISTS');
        }

        $this->company->save($data);
        return ['id' => $this->company->lastSavedId()];
    }

    public function findCompaniesAndOrders()
    {
        return $this->company->companiesAndOrders();
    }

    public function checkIfExists($data)
    {
        return $this->company->exists(['cnpj' => $data['cnpj']]);
    }

}
