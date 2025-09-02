# This repo is a POC for testing how nestjs can be configured to connect to multiple databases

For this experiment i will create two services using the docker compose i.e. mariadb and postgres and then connect nestjs backend with the two databases

# Steps to run locally

1. Clone the repo
2. Run `yarn install` or `npm install`
3. Run `yarn env:init` or `npm run env:init` (in case of some error, run `yarn env:reset` to delete and regenerate a .env file)
4. Run `yarn prisma:generate` or `npm run prisma:generate`
5. Run `yarn db:up` or `npm run db:up`
6. Run `yarn prisma:migrate` or `npm run prisma:migrate`

## Note:
Migration fails for the command that runs the migration in mariadb because of some authentication issue