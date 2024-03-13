## Description

- DDD
  - Domain 계층
    - Core 비즈니스 로직과 엔티티를 포함합니다.
  - Application 계층
    - 도메인 모델을 활용해서 비즈니스 로직을 수행합니다.
  - Infrastructure 계층
    - 데이터베이스, 외부 API와 같은 외부와의 연동을 담당합니다.
  - Presentation 계층
    - restful API와 같이 기능을 클라이언트에 노출하는 컨트롤러를 포함합니다.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
