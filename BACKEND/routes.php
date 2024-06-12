<?php
use Slim\App;
use App\ProductModel;

return function (App $app) {
    $app->get('/api/hello/{name}', function ($request, $response, array $args) {
        $name = $args['name'];
        $response->getBody()->write("Hello, $name");
        return $response;
    });

$app->post('/login', function ($request, $response, array $args) {
    $params = (array)$request->getParsedBody();
    $username = $params['username'];
    $password = $params['password'];
    
    $user = authenticateUser($username, $password);
    if ($user) {
        $token = createToken($user); 
        $response = $response->withJson(['token' => $token]);
    } else {
        $response = $response->withStatus(401)->withJson(['error' => 'Invalid credentials']);
    }

    return $response;
});

$app->post('/register', function ($request, $response) {
    $params = $request->getParsedBody();
    $user = createUser($params);
    if ($user) {
        return $response->withJson(['message' => 'User created successfully', 'user' => $user]);
    } else {
        return $response->withStatus(400)->withJson(['error' => 'Failed to create user']);
    }
});


$app->put('/account/{id}', function ($request, $response, array $args) {
    $userId = $args['id'];
    $params = $request->getParsedBody();
    $user = updateUser($userId, $params);
    if ($user) {
        return $response->withJson(['message' => 'User updated successfully', 'user' => $user]);
    } else {
        return $response->withStatus(400)->withJson(['error' => 'Failed to update user']);
    }
});

$app->get('/search-pipe', function ($request, $response, $args) {
    $queryParams = $request->getQueryParams();
    $name = $queryParams['name'] ?? '';
    $brand = $queryParams['brand'] ?? '';

    // Chemin vers le fichier JSON dans votre serveur
    $pathToJson = __DIR__ . '/produits.json';

    // Lire le contenu du fichier JSON
    $jsonData = file_get_contents($pathToJson);
    
    // Assurez-vous que le fichier JSON est lu correctement
    if ($jsonData === false) {
        return $response->withStatus(500)->write("Erreur de chargement des données");
    }

    // Décoder le contenu JSON
    $products = json_decode($jsonData, true)['cars'];

    // Filtrer les produits selon les critères de recherche
    $filteredProducts = array_filter($products, function ($product) use ($name, $brand) {
        return (stripos($product['name'], $name) !== false) && (stripos($product['brand'], $brand) !== false);
    });

    // Renvoyer le contenu JSON filtré avec le bon header
    $response->getBody()->write(json_encode(['cars' => $filteredProducts]));
    return $response->withHeader('Content-Type', 'application/json');
});






$app->get('/search', function ($request, $response, $args) use ($app) {
    $queryParams = $request->getQueryParams();
    $name = $queryParams['name'] ?? '';
    $brand = $queryParams['brand'] ?? '';

    $productModel = $app->getContainer()->get('ProductModel');  // Utilisez l'identifiant sans namespace

    $products = $productModel->search($name, $brand);

    $data = [
        'message' => "Search results for Name: $name, Brand: $brand",
        'data' => $products
    ];
    $response->getBody()->write(json_encode($data));
    return $response->withHeader('Content-Type', 'application/json');
});


$app->get('/test', function ($request, $response, $args) {
    $response->getBody()->write("Test route is working!");
    return $response;  
});

$app->get('/products', function ($request, $response, array $args) use ($app) {
    $productModel = $app->getContainer()->get('ProductModel');
    $products = $productModel->getProductsFromDatabase();
    $response->getBody()->write(json_encode($products));
    return $response->withHeader('Content-Type', 'application/json');
});



};