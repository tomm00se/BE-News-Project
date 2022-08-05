# Northcoders News API

## Background

This project is an API for the purpose of accessing application data programmatically. The intention of this project is to to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end.

This database will be using PostgreSQL (PSQL), and to interact with this database, I have used [node-postgres](https://node-postgres.com/).

### HTTP Methods

This project uses different HTTP methods such as;

- GET
- PATCH
- POST
- DELETE

To retrive, update or delete queried data.

## Hosted version - Heroku!

To interact with this back-end API project you can visit the link: https://mooses-backend-news-project.herokuapp.com/api

This link will provide a JSON representation of all available endpoints.

## Local Development

To get started with this repo you will need to install the following dependencies:

- Node.js 16+ - <https://nodejs.org/en/>
- PostgreSQL 14 - <https://www.postgresql.org/>

Once these dependencies have been installed, please follow these steps to run this repo locally:

1. Fork and Clone - `git clone <insert-forked-url>`
2. Install Node modules - `npm install`
3. Create environment variables - **See section on setting envionment variables**
4. Seed the PostgreSQL database - `npm run seed`
5. Start the Express server - `npm run start`

### Supertest

To run tests in this project use the command:

1. Run in CLI - `npm run test <insert-test-file-path>`

## Setting environment variables

Due to this repo not providing any enviroment files, you will need to provide these files locally to run this project successfully.
To successfully clone this repo you will need to create a .env.test file and a .env.development file which sets PGDATABASE equal to the names of the testing database and the development database.

This can be done using this syntax;

`PGDATABASE=<name-of-database>`

<hr>
