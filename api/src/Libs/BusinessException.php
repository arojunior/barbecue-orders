<?php
namespace BarbecueOrders\Libs;

use Exception;

class BusinessException extends Exception
{
    public function __construct(array $e) {
        throw new $this($e['error']['msg']);
    }
}