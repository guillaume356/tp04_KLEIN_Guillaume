# Utiliser une image de base PHP avec Apache
FROM php:8.1-apache

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier le contenu de votre projet dans le conteneur
COPY . .

# Installer les dépendances via Composer
RUN apt-get update && \
    apt-get install -y libzip-dev unzip && \
    docker-php-ext-install zip && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    composer install

# Donner les permissions correctes aux fichiers
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html

# Exposer le port 80
EXPOSE 80

# Démarrer Apache
CMD ["apache2-foreground"]
