# Backend Position Technical Task

Implement REST API that allows users to:

- Lookup for a particular IP address info via https://ipwhois.io/ and store in to DB
- Response with a stored lookup info from DB in case the spefic IP was already searched (DB-caching)
- Remove cached result by IP

## Required parts

- SQL or noSQL database or file
- Typescript
- Clean Architecture

## Up to candidate

- Tests
- Deployment infrastructure preparation (Docker, Serverless, etc.)

## Huw To Run
- `npm i`
- `docker compose -f "docker-compose.yml" up -d --build`
- Go to `http://localhost:3000/api/swagger#/ips/IpsController_removeCache` (3000 or port from .env)
