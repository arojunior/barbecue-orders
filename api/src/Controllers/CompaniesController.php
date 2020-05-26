<?php
namespace BarbecueOrders\Controllers;

use BarbecueOrders\Libs\Errors;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use BarbecueOrders\Repositories\CompaniesRepository;

class CompaniesController extends AppController
{

    protected $company;

    public function __construct(CompaniesRepository $repository)
    {
        parent::__construct();
        $this->company = $repository;
    }

    public function add(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody();

        $company = $this->company->create($data);

        if ($company['error']) {
            return Errors::toJson($response, $company['error']);
        }

        return $this->withJson($response, [
            'id' => $company['id'],
        ]);
    }

    public function orders(Request $request, Response $response): Response
    {
        return $this->withJson($response, $this->company->findCompaniesAndOrders());
    }

    public function ordersByCompany(Request $request, Response $response, $args): Response
    {
        return $this->withJson($response, $this->company->findOrdersByCompany($args['id']));
    }

}
