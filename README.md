# EXPRESS-MONGO-APP

1. express-mongo-app 

2. Containerised APP 


 SERVICES:
 
   MONGODB:
   
     PORT: 2717
     
   NODE:
   
     PORT: 4000
     

## HOW TO USE THIS

1. INSTALL DOCKER

2. CLONE THIS REPOSITORY TO YOUR LOCAL SYSTEM

       git clone https://github.com/Blackfury7/express-mongo-app.git
 
3. ENTER THE PROJECT
      
       cd express-mongo-app/myapp
 
4. RUN THE DOCKER CONTAINERS WITH A SINGLE COMMAND
 
       docker-compose up
       
       

NOW THE DOCKER CONTAINERS ARE RUNNING



## HOW TO CHECK WHETHER THE CONTAINER IS RUNNINNG PROPERLY

1. YOU CAN ACCESS THE EXPRESS APP AT <a href="http://localhost:4000/" target="_blank"> http://localhost:4000/ </a> IN YOUR BROWSER

2. YOU CAN ACCESS THE MONGODB DOCKER CONTAINER WHICH IS ACCESSIBLE AT PORT: 2717

 - ACCESS WITH THE HELP OF MONGOSH (MONGODB SHELL)
 
  - INSTALL MONGOSH
  
  \# TO CHECK MONGOSH IS INSTALLED OR NOT
      
      mongosh --version
      
   \# TO LOGIN INTO DOCKER MONGODB
   
      mongosh --port 2717
   
   \# TO SHOW ALL AVAILABLE DB IN MONGO
        
      show dbs
      
  \# TO SWITCH DB
     
     use Tutorial
     
  \# TO SHOW TUTORIALS COLLECTION DATA
   
     db.tutorials.find()
  
