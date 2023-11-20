## Dockerización

1. crear imagen
docker image build -t luka/lukafront-1.0.0 .

2. Ejecución
docker run -d --name lukaFront -e SERVER_PORT=3000 -p 3000:3000 luka/lukafront-1.0.0