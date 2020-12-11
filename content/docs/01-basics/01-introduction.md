---
title: 'Introduction'
description: ''
search: ''
---

## Introduction

Rocket is a free, open source and self-hostable deployment tool.

Commit, push, your project is deployed! Rocket takes care of the deployment process on your server. 

It can deploy any PHP or Javascript application, regardless of the framework, with or without dependencies or assets to build.

Main features :

* Built with modern technologies
* Easy setup process
* Simultaneous deployments (queues)
* Agentless, it’s just SSH
* Zero downtime deployments
* Integrates with GitHub, with public or private repositories
* Push to deploy
* Shared directories and `cron` jobs sync
* Ready to use presets for most frameworks (soon)

## Understanding the need

In short: If you are familiar with online code deployment tools, this system is an alternative that bring the benefits of an online tool, for free.

### Problem

Deployments are a hassle.

Eg. using Laravel, you're supposed to put your application into maintenance mode before deploying with `php artisan down`, pull in your code, clear caches, install packages, build assets, restart services, etc.

While you wait, you run `sl` in another terminal. Finally you put the application back up. Sh*t! You forgot to run the migrations.

### Partial solution

Tools like [Deployer](https://deployer.org/) can automate deployment scenarios and run from your local environnement. To work successfully they need a configuration and have to be ran manually everytime you want to deploy your website.

On the other hand, there are paid tools like [Envoyer.io](https://envoyer.io) that offer a higher level of automation by performing the deployment online, in a completely automated way for each push you do. Problem, these services are not free, or some with a free-tier which limits the number of projects.


!> Rocket provides the benefits from both tools without the cons.