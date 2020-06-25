# MC-TODO-App

## Starten

### 1. Database

```bash
cd database
docker build . -t docker_username/postgres
docker run --name pg -p 5432:5432 -d docker_username/postgres
docker start pg
```

### 2. Controller

```bash
cd controller
npm install
npm run start
```

### 2. Frontend

```bash
npm install
ng serve --open
```
