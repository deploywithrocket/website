---
title: 'Installing Rocket'
description: ''
search: ''
---

## Installing Rocket

There are two ways of installing Rocket on your server and performing your first deployment.

* [Installing from build](#installing-from-build)
* [Installing from source](#installing-from-source)

### Installing from build

Download the [latest Rocket build](/downloads), upload it and unzip it on your server.

#### Point the domain to the uploaded folder

Point your domain or subdomain to the `public` directory inside the Rocket folder.

Please note that Rocket must be installed on a primary domain or subdomain. Installing on a sub-folder will not work, for example:

* `example.com/rocketapp` (invalid)
* `localhost/rocket` (invalid)
* `example.com` (valid)
* `rocket.example.com` (valid)
* `rocket.localhost` (valid)

#### Fix file permissions

In your Rocket root folder, run the command: `chmod -R 775 ./`

#### Complete installation wizard

Open the link to the domain in the browser and complete the installation wizard as directed.

### Installing from source

You will need [Composer](https://getcomposer.org/) and npm or [Yarn](https://classic.yarnpkg.com/) to install the project dependencies.

* Clone [the repository](https://github.com/deploywithrocket/core) from GitHub.
* Download all the required Node dependencies using the `yarn` command inside your cloned folder.
* Run `yarn dev` to generate the public files (do `yarn prod` if you wish to use it on production).
* Run `composer install` inside your cloned folder to install all Laravel/PHP dependencies.
* Create an `.env` file by duplicating `.env.example`.
* Run `php artisan key:generate` to generate an unique application key.

#### Fix file permissions

In your Rocket root folder, run the command: `chmod -R 775 ./`

#### Complete installation wizard

Open the link to the domain in the browser and complete the installation wizard as directed.