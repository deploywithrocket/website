---
title: 'Server setup'
description: ''
search: ''
---

## Server setup

This guide contains copy-paste ready commands to install a LAMP stack (Linux, Apache, MySQL, PHP) with Rocket.

It was written and tested on **Ubuntu 20.10** and should work on any system using apt.

!> This guide is intended for beginners. If you already know how to install a Laravel project, go to the [Installing Rocket](/docs/installing/installing-rocket) page.

## Installing the packets

### System utilities

```bash
sudo apt install \
    git curl zip unzip \
    redis supervisor
```

### Web server

First, add `ondrej/php` PPA

```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
```

Then install the web-server required packages

```bash
sudo apt install \
    apache2 php7.4 libapache2-mod-php \
    php7.4-bcmath php7.4-cli php7.4-common php7.4-curl php7.4-fpm php7.4-gd php7.4-gmp php7.4-intl php7.4-mbstring php7.4-mysql php7.4-opcache php7.4-pgsql php7.4-readline php7.4-xml php7.4-zip php7.4-imagick php7.4-redis
```

### Composer

```bash
sudo wget https://getcomposer.org/download/2.0.8/composer.phar
sudo chmod +x composer.phar
sudo mv composer.phar /usr/bin/composer
sudo composer self-update
```

### Node, npm and Yarn

```bash
sudo curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn npm -y
```

### MySQL

```bash
sudo apt install mysql-server -y
sudo mysql_secure_installation
```

Your server should be ready to run any PHP project.

## Configuration

### Cloning Rocket

```bash
CURRENTUSER=$(whoami)
sudo chmod 775 /var/www
sudo chown -R $CURRENTUSER:$CURRENTUSER /var/www

mkdir -p /var/www/rocket/current
git clone https://github.com/deploywithrocket/core /var/www/rocket/current

cd /var/www/rocket/current
cp .env.example .env
composer install --no-dev
yarn
yarn prod
php artisan key:generate
php artisan storage:link
chmod 775 -R storage bootstrap/cache
```

### Create the database

!> Don't forget to replace `MYSQL_PASSWORD` with a randomly generated password.

```bash
sudo mysql --execute="create database rocket;"
sudo mysql --execute="create user 'rocket'@'localhost' identified by 'MYSQL_PASSWORD';"
sudo mysql --execute="grant all privileges on rocket.* to rocket@localhost;"
sudo mysql --execute="flush privileges;"
```

### Create the virtual host

```bash
cd /etc/apache2/sites-available
sudo nano rocket.conf
```

!> Don't forget to replace `ServerName` and `DocumentRoot` properties.

```
<VirtualHost *:80>
  ServerAdmin contact@rocket.org
  ServerName deploywithrocket.dev

  DocumentRoot /var/www/rocket/current/public

  <Directory /var/www/rocket/current>
          AllowOverride All
  </Directory>

  ErrorLog /var/log/apache2/rocket/error.log
  CustomLog /var/log/apache2/rocket/access.log combined
</VirtualHost>
```

```bash
sudo mkdir -p /var/log/apache2/rocket
sudo a2enmod rewrite
sudo a2ensite rocket
sudo a2dissite 000-default
sudo apachectl restart
```

### Setup a queue listener

```bash
cd /etc/supervisor/conf.d/
nano rocket-worker.conf
```

```ini
[program:rocket-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/rocket/current/artisan queue:work --tries=3
autostart=true
autorestart=true
user=www-data
numprocs=4
redirect_stderr=true
stdout_logfile=/var/www/rocket/current/storage/logs/worker.log
```

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start rocket-worker:*
```

### Schedule the scheduler

```bash
sudo crontab -e
```

```cron
* * * * * cd /var/www/rocket/current && php artisan schedule:run >> /dev/null 2>&1
```
