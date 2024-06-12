<?php
namespace App;

use App\Database;

class UserModel {
    public static function createUser($data) {
        $db = Database::getDB();
        $query = "INSERT INTO users (username, password, email, name) VALUES (:username, :password, :email, :name)";
        try {
            $stmt = $db->prepare($query);
            $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
            $stmt->bindParam(':username', $data['username']);
            $stmt->bindParam(':password', $data['password']);
            $stmt->bindParam(':email', $data['email']);
            $stmt->bindParam(':name', $data['name']);
            $stmt->execute();
            return $db->lastInsertId();
        } catch (PDOException $e) {
            error_log("Erreur lors de la création de l'utilisateur: " . $e->getMessage());
            return false;
        }
    }

    public static function updateUser($id, $data) {
        $db = Database::getDB();
        $query = "UPDATE users SET username = :username, email = :email, name = :name WHERE id = :id";
        try {
            $stmt = $db->prepare($query);
            $stmt->bindParam(':username', $data['username']);
            $stmt->bindParam(':email', $data['email']);
            $stmt->bindParam(':name', $data['name']);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            return ($stmt->rowCount() > 0);
        } catch (PDOException $e) {
            error_log("Erreur lors de la mise à jour de l'utilisateur: " . $e->getMessage());
            return false;
        }
    }
}
