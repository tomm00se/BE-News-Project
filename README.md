# Northcoders News API

## Background

We will be building an API for the purpose of accessing application data programmatically. The intention here is to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end architecture.

Your database will be PSQL, and you will interact with it using [node-postgres](https://node-postgres.com/).

## Kanban

### A Link to my Trello Board can be found here: https://trello.com/b/NMqrJ5Qx/be-nc-news

## Setting enviroment variables

Due to this repo not providing any enviroment files, you will need to provide these files locally to run this project successfully.
To successfully clone this repo you will need to create a .env.test file and a .env.development file which sets PGDATABASE equal to the names of the testing database and the development database.

This can be done using this syntax;

`PGDATABASE=<name-of-database>`
