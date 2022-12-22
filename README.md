# EXPRESS-MONGO-APP

1. express-mongo-app 
2. Containerized the APP 
 SERVICES:
   MONGODB:
     PORT: 2717
   NODE: 
     PORT: 4000

## HOW TO USE THIS

1. INSTALL DOCKER
2. CLONE THIS REPOSITORY TO YOUR SYSTEM
3. CD express-mongo-app/myapp
4. docker-compose up

NOW THE DOCKER CONTAINER IS RUNNING

YOU CAN ACCESS THE EXPRESS AT http://localhost:4000/ IN YOUR BROWSER

YOU CAN ACCESS THE MONGODB DOCKER CONTAINER WHICH IS ACCESSIBLE AT PORT: 2717
 - ACCESS WITH THE HELP MONGOSH (MONGODB SHELL)
  - INSTALL MONGOSH
  # to check mongosh is install or not
  - mongosh --version
  - mongosh --port 2717
  # to switch the db
  - use Tutorial
  # to show the collection data
  - db.tutorials.find()
  
