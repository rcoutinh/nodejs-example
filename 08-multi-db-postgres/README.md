// Verificar se está rodando
docker ps

// Imagem postgres
docker run \
    --name postgres \
    -e POSTGRES_USER=rcoutinho \
    -e POSTGRES_PASSWORD=minhasenha \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker run --name postgres -e POSTGRES_USER=rcoutinho -e POSTGRES_PASSWORD=minhasenha -e POSTGRES_DB=heroes -p 5432:5432  -d postgres

// Entrar no container, terminal
docker exec -it postgres /bin/bash

// testar se o postgres está rodando
# psql

// Outra imagem
docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

## --- MONGODB
docker run --name mongodb -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin -p 27017:27017 -d mongo:4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user:'rcoutinho', pwd:'minhasenha', roles:[{role: 'readWrite', db:'herois'}]})"

















