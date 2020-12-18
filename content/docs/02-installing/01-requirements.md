---
title: 'Requirements'
description: ''
search: ''
---

## Requirements

Rocket is PHP application, built with Laravel 8.

**Currently, Rocket only works on Unix systems and have not yet been tested on Windows.**

Packages required on your server :
- `ssh` command
- PHP 7.4^
- Any [*Laravel-compatible* database system](https://laravel.com/docs/8.x/database#introduction)

Since this project uses Laravel queues, you will eventually need to choose a queue driver and run a queue listener. We recommend that you use Redis and Supervisor.

!> If you do not know how to configure a *Laravel-type* server, head over the [server setup](/docs/guides/server-setup) guide.