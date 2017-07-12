<?php
// Routes

$app->get('/', function ($request, $response) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    return $this->response->withJson(['Hello World' => 'We are Alive!']);
});
