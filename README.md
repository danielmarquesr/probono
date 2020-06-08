# probono

## How to run

* Clone this repo in your machine

* **With Docker**

  * Run back-end in one terminal:

        $ cd <path_of_repo>/api
        $ docker-compose up

  * (**OPTIONAL**) Run the seed of api in another terminal:

        $ cd <path_of_repo>/api
        $ docker-compose exec web npm run seed

  * Run front-end in another terminal:

        $ cd <path_of_repo>/front
        $ docker-compose up

* **Or with NPM**

  * Run back-end in one terminal:

        $ cd api
        $ npm install
        $ npm run migrate
        $ npm run seed # (OPTIONAL)
        $ npm run start

  * Run front-end in another terminal:

        $ cd <path_of_repo>/front
        $ npm install
        $ npm run serve

* Wait until see this message in the terminal:

      Express server running in port 3000

* Wait until see this message in the another terminal:

      App running at:
         - Local:   http://localhost:8080/

* In your browser, access this page http://localhost:8080/login

* (**OPTIONAL**) If you seed the api before, you can sign in with this two credencials:

      - Advogado
          email: joao@gmail.com
          senha: 123456
      - Cliente
          cpf: 12345678910
          senha: 123456

## Details
