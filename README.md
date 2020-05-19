# Introduction

This repository contains reproduction for https://github.com/prisma/prisma-client-js/issues/686


## Steps
1. Clone this repository
2. Run `yarn install`
3. Change credentials in `prisma/.env`
4. Run `npx prisma migrate save --experimental && npx prisma migrate up --experimental`
5. Run `yarn start`
