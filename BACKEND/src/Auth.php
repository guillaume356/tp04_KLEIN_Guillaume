<?php

namespace App\Auth;

class Auth {
    public static function authenticateUser($username, $password) {
        $hashedPassword = self::getUserPasswordFromDB($username);
        return password_verify($password, $hashedPassword) ? self::getUserByUsername($username) : false;
    }

    public static function createToken($user) {
        $payload = [
            'iss' => "YourIssuer",
            'iat' => time(),
            'exp' => time() + 7200,
            'sub' => $user['id'],
        ];
        return \Firebase\JWT\JWT::encode($payload, 'your_secret_key', 'HS256');
    }

    private static function getUserPasswordFromDB($username) {
        // Logique de récupération du mot de passe hashé depuis la base de données
    }

    private static function getUserByUsername($username) {
        // Logique pour récupérer l'utilisateur depuis la base de données
    }
}
