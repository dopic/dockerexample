# dockerexample

Exemplo de uma aplicação NodeJS com Docker.

## Build

docker build -t myimage .

##Run

docker run -d -p 8080:3000 --name testcontainer myimage
