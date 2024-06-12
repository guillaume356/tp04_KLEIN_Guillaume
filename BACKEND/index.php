<?php
use Slim\Factory\AppFactory;
use DI\ContainerBuilder;

require_once __DIR__ . '/ProductModel.php';
require __DIR__ . '/vendor/autoload.php';

$containerBuilder = new ContainerBuilder();
$containerBuilder->addDefinitions([
    PDO::class => function () { 
        $host = 'localhost';
        $db   = 'autos_database';
        $user = 'gklein';
        $pass = '20021223';
        $charset = 'utf8mb4';
        $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        return new PDO($dsn, $user, $pass, $options);
    },
    'ProductModel' => function (PDO $pdo) {
        return new ProductModel($pdo);
    }
]);

$container = $containerBuilder->build();

AppFactory::setContainer($container);
$app = AppFactory::create();
(require __DIR__ . '/routes.php')($app);
$app->addRoutingMiddleware();
$app->addErrorMiddleware(true, true, true);
$app->setBasePath("/BACKEND");

$app->add(function ($request, $handler) {
    $response = $handler->handle($request);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')  // Autorise les requêtes CORS de localhost:4200
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:8080')  
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->withHeader('Access-Control-Allow-Credentials', 'true');  // Si vous avez besoin de cookies ou d'authentification basée sur les en-têtes
});


$app->run();
