# Example mu-project - Finance tracker

## Intro
This project is an example project made with [mu.semte.ch](https://github.com/mu-semtech), as onboarding for a position at ABB. The README exists of 3 parts:
- [description of app](#app-description)
- [project requirements](#project-requirements)
- [mu-project explanation](#quickstart-an-mu-project)

## App description
The main idea of the app is to create a tracker for your financial situation. The base is pretty simple, it is a CRUD app, so it should be possible to create, read, update and delete expenses. All this should be shielded behind a login and it should be possible to create some nice visuals to get an overview of your financial situation. Many extensions could still be added in later phases, uploading tickets, scanning tickets, talking to some bank or shop api's etc..

In this phase the application can still go in another direction as well.

## Project requirements

You should make a project on your own.  Like really, you. All of it. This means working with a few different tools and adding a few features.
   
A checkbox for your solution. Let's assume you make duperdap

    - [x] has an app-duperdap mu-project
    - [x] has a frontend-duperdap frontend in EmberJS
    - [x] uses ember-data in the frontend
    - [x] uses omnipresent microservices:
      - [x] identifier
      - [x] dispatcher
      - [x] resource
      - [x] mu-authorization
      - [x] virtuoso
      - [x] migrations
    - [ ] includes at least one custom microservice
    - [x] uses mu-cl-resources for generic API
    - [x] uses migrations-service for seed data
    - [ ] includes docker-compose.yml that could be used as production setup
    - [ ] includes docker-compose.dev.yml for development overrides (eg: publish port 80 of identifier, 8890 of Virtuoso)
    - [ ] has woodpecker builds for the frontend and custom services

An approach forward
    Choose a simple CRUD application that you could use.

    1. Initialize a new mu-project
    2. Initialize a new EmberJS frontend
    3. CRUD models through mu-authorization
    4. Add microservice for some statistics

Some interesting extras:

    1. something to shield data with login
    2. use mu-cache with mu-cl-resources
    3. consume delta messages in a custom service

## Quickstart an mu-project

Bootstrap a mu.semte.ch microservices environment in three easy steps.

> [INFO]
> This project was created by running `mu project new awesome-project-name`.  If read on GitHub under mu-semtech/mu-project then it is the template repository for a new project, use `mu project new` instead.

Setting up your environment is done in three easy steps:
1. First configure the running microservices and their names in `docker-compose.yml`
2. Then, configure how requests are dispatched in `config/dispatcher.ex`
3. Lastly, simply start the docker-compose.

### Hooking things up with docker-compose

Alter the `docker-compose.yml` file so it contains all microservices you need.  The example content should be clear, but you can find more information in the [Docker Compose documentation](https://docs.docker.com/compose/).  Don't remove the `identifier` and `db` container, they are respectively the entry-point and the database of your application.  Don't forget to link the necessary microservices to the dispatcher and the database to the microservices.

### Configure the dispatcher

Next, alter the file `config/dispatcher/dispatcher.ex` based on the example that is there by default.  Dispatch requests to the necessary microservices based on the names you used for the microservice.

### Boot up the system

Boot your microservices-enabled system using docker-compose.

    cd /path/to/mu-project
    docker-compose up

You can shut down using `docker-compose stop` and remove everything using `docker-compose rm`.
