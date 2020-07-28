# MC-TODO-App

## Startup

### 1. Database

```bash
cd database
docker build . -t docker_username/postgres
docker run --name pg -p 5432:5432 -d docker_username/postgres
docker start pg
```
Note: Since the database is running on a web-server, step 1 can be skipped.

### 2. Controller

```bash
cd controller
npm install
npm run start
```

### 3. Frontend

```bash
cd frontend
npm install
ng serve --open
```
