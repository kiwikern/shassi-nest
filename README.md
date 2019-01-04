# Shassi

[![Build Status](https://travis-ci.org/kiwikern/shassi-nest.svg?branch=master)](https://travis-ci.org/kiwikern/shassi-nest)
[![dependencies Status](https://david-dm.org/kiwikern/shassi-nest/status.svg)](https://david-dm.org/kiwikern/shassi-nest)
[![devDependencies Status](https://david-dm.org/kiwikern/shassi-nest/dev-status.svg)](https://david-dm.org/kiwikern/shassi-nest?type=dev)

[![Coverage Status](https://coveralls.io/repos/github/kiwikern/shassi-nest/badge.svg?branch=master)](https://coveralls.io/github/kiwikern/shassi-nest?branch=master)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=shassi-nest&metric=sqale_index)](https://sonarcloud.io/dashboard?id=shassi-nest)
[![Lines Of Code](https://sonarcloud.io/api/project_badges/measure?project=shassi-nest&metric=ncloc)](https://sonarcloud.io/dashboard?id=shassi-nest)



## Description

Shassi is a shopping assistant helping you to keep track of products you are interested in and notifying you when price or availability change.

## Installation
```bash
$ npm install
```

Create a `development.env` file. You can use the `development.env.sample` file. 

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# linkt
$ npm run lint
```


