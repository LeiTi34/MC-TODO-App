# Postgres Docker Image

## Build container

`docker build . -t docker_username/postgres`

## Daemonize container

`docker run --name pg -p 5432:5432 -d docker_username/postgres`

## Run container

`docker start pg`
