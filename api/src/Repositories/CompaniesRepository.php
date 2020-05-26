<?php
namespace BarbecueOrders\Repositories;

use BarbecueOrders\Repositories\Contracts\CompaniesInterface;
use BarbecueOrders\Libs\Errors;
use BarbecueOrders\Models\Company;
use BarbecueOrders\Libs\BusinessException;

class CompaniesRepository implements CompaniesInterface
{

    protected $company;
    protected $errorHandler;

    public function __construct(Company $model)
    {
        $this->company = $model;
    }

    public function create(array $data) : array
    {
        if (self::checkIfExists($data)) {
            throw new BusinessException(Errors::get('COMPANY_ALREADY_EXISTS'));
        }

        $this->company->save($data);
        return ['id' => $this->company->lastSavedId()];
    }

    public function findCompaniesAndOrders()
    {
        return $this->company->companiesAndOrders();
    }

    public function findOrdersByCompany(int $id) : array
    {
        return $this->company->ordersByCompany($id);
    }

    public function checkIfExists($data)
    {
        return $this->company->exists(['cnpj' => $data['cnpj']]);
    }

}
