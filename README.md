# starwars-fullstack project

Technologies : Nodejs, React, Docker.

# To run the project


- Clone the project.
cd to root directory and run 
1) docker-compose build
2) docker-compose up




# endpoints:
- GET api/films with optional title param
- GET /api//film/:id with optional expand param
- If you are using postman:
- You can view the postman collection in the project and import it to postman if needed

# Curl examples:

- curl --location --request GET 'localhost:4000/api/films/1?expand=characters'
- curl --location --request GET 'localhost:4000/api/films/1?expand=vehicles'
- curl --location --request GET 'localhost:4000/api/films'
- curl --location --request GET 'localhost:4000/api/films?title=hope'
