# API Test Automation framework
Boilerplate API test framework using Mocha, SuperTest and TypeScript.

#### Pre-requisite:
[![NodeJs](https://img.shields.io/badge/-NodeJS-white?logo=node.js)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

#### Getting Started:
Clone Repository

Install the dependencies
```bash
npm install
```

Setup access token
```bash
- Create .env file and add actual token, refer .env.example file
- Base url = http://api.exchangeratesapi.io
```

Run tests
```bash
npm test
```

Report Path:
```bash
path: <PROJECT_FOLDER>/report/index.html
```

Docker Run:
> Setup [docker](https://docs.docker.com/get-docker/) in your local machine to run test in dockerize environment
```bash
docker compose up
```

Run in Github Actions
> Currently test is setup to execute in github action on push event. 


#### Features:
    - Supertest library
    - Mocha framework to organize tests
    - Mochawesome report integration with logs
    - Custom types for better code intellisense
    - Docker and Github integration
    - Request and response report logger
    - Lint for better code quality
    - Husky for auto lint check before code commit
    - Manage secretes using dotenv library

#### Tech stacks:
[![SuperTest](https://img.shields.io/badge/-SuperTest-07BA82?logoColor=white)](https://github.com/visionmedia/supertest)
[![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?logo=Typescript&logoColor=black)](https://www.typescriptlang.org/)
[![Mocha](https://img.shields.io/badge/-Mocha-%238D6748?logo=Mocha&logoColor=white)](https://mochajs.org/)
[![ChaiJS](https://img.shields.io/badge/-ChaiJS-FEDABD?logo=Chai&logoColor=black)](https://www.chaijs.com/)
[![GithubActions](https://img.shields.io/badge/github%20actions-%232671E5?logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white)](https://www.docker.com/)
[![ESlint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white)]([https://www.docker.com/](https://typescript-eslint.io/))
[![Husky](https://img.shields.io/badge/Husky-dbc1ac?logo=gitlab&logoColor=black)]([https://www.docker.com/](https://typicode.github.io/husky/))

#### Folder Structure:
```bash
├───.github
├───.husky
├───.vscode
├───src
|     ├───helper
|     ├───test
|     └───types
├───.env.example
├───.eslintrc.js
├───.gitignore
├───.mocharc.js
├───Dockerfile
├───docker-compose.yml
├───package-lock.json
├───package.json
├───README.md
└───tsconfig.json
```
