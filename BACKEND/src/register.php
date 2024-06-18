<?php

namespace App\Auth;

require './Database.php'; 

use App\Database;

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['username']) && isset($input['password'])) {
    $username = $input['username'];
    $password = password_hash($input['password'], PASSWORD_BCRYPT);

    try {
        $db = Database::getDB();
        $stmt = $db->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
        $stmt->execute(['username' => $username, 'password' => $password]);
        echo json_encode(['message' => 'User registered successfully']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input']);
}
?>
