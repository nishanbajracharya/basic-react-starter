# Basic React Starter

[![Code Climate](https://codeclimate.com/github/nishanbajracharya/basic-react-starter/badges/gpa.svg)](https://codeclimate.com/github/nishanbajracharya/basic-react-starter)

A basic react.js starter using babel, eslint and webpack. 

## Requirements

* [Node.js](https://nodejs.org/en/) >= 6.11.0
* [NPM](https://www.npmjs.com/) >= 3.10.10
* [Yarn](https://yarnpkg.com/) >= 0.24.6

## Installation

* Clone the repository from [https://github.com/nishanbajracharya/basic-react-starter](https://github.com/nishanbajracharya/basic-react-starter):

      $ git clone https://github.com/nishanbajracharya/basic-react-starter.git

* Navigate to the directory `cd basic-react-starter` and install all dependencies listed in [package.json](package.json) using **yarn**:

      $ yarn

* Make a copy of `.env.example` as `.env` and update the configurations:

      $ cp .env.example .env

    Configure `APP_HOST` and `APP_PORT` in `.env`

## Usage

* For Development:

      $ yarn start

    Run the dev server at `http://localhost:3000` or the configured `APP_HOST` and `APP_PORT` in `.env`

* For Production:

      $ yarn build:production

## Lint (For Development)

[ESLint](https://eslint.org/) is used for style checking. It is recommended to run the linter before committing anything:

    $ yarn lint

Fix common linter issues using:

    $ yarn lint:fix
