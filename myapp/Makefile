# build image using Dockerfile
build-image:
	docker build -t blackfury/express-app:0.0.0.RELEASE .

# create container using the image created by Dockerfile
run-image:
	docker run --name express-app -p 3000:3000 -d blackfury/express-app

# create an image and start a container using docker-compose
up-dev:
	docker-compose up --build -d
	# COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build

# stopping a container started using docker-compose
down:
	docker-compose down
