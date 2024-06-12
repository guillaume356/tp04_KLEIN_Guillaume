<?php
namespace App\Models;

use PDO;

class ProductModel {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    public function getProducts() {
        $statement = $this->pdo->query("SELECT * FROM products");
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}
