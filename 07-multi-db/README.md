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
