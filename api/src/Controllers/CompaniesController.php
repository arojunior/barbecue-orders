<?php
namespace BarbecueOrders\Controllers;

use BarbecueOrders\Controllers\AppController;

class CompaniesController extends AppController
{

    protected $company;

    public function __construct($repository)
    {
        $this->company = $repository;
        parent::__construct();
    }

    public function add($request, $response)
    {
        $data = $request->getParsedBody();

        $company = $this->company->create($data);

        return ($company['error']
                ? $this->errorHandler->toJson($company['error'], $response)
                : $response->withJson(['id' => $company['id']])
            );
    }

    public function orders($request, $response)
    {
        return $response->withJson($repository->findCompaniesAndOrders());
    }

}