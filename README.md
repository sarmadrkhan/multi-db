# This repo is a POC for testing how nestjs can be configured to connect to multiple databases

For this experiment i will create three services using the docker compose i.e. postgres, mariadb and mysqldb and then connect nestjs backend with the three databases

# Steps to run locally

1. Clone the repo
2. Run `yarn install`
3. Run `yarn env:init` (in case of some error, run `yarn env:reset` to delete and regenerate a .env file)
4. Run `yarn prisma:generate`
5. Run `yarn db:up`
6. Run `yarn prisma:migrate`
7. Run `yarn start:dev`