# vartak_assingnment

## Table of Contents
  * About the project
  * Build with
  * Getting started
  * API Endpoints
  * Deployed Link
  * Dummy User Credentails 


## About the project
   ### This is a small library management app where a user can register, login, and create books 
   * User with role "CREATOR" can create a book using enpoint `/api/books` method: `POST`
   * User with role "VIEWER" can view all the books created by him/her using endpoint `/api/books` method: `GET`
   * User with role "VIEW_ALL" can view all the books by using endpoint `/api/books/` method: `GET`
   * User with roles "VIEWER" and  "VIEW_ALL" can filter the data by `query`  `old=1` for book data created  10 minutes ago and more   and `new=1` for book data that were created  less than 10 minutes ago

## Build with
   * Node.js
   * Express.js
   * MongoDB Atlas
   * TypeScript

## Getting Started

  ### Installation 
   1. Clone the repo
      **git clone https://github.com/anujrawat22/vartak_assingnment.git**

   2.  set up environment variables by creating a `.env` file
      and add the following to the .env file <br />
      * PORT = 8080 <br />
      * SECRET_KEY = token_secret_key <br />
      * MONGO_URL = your mongo URL <br />
      
   3. Install all the dependencies with the command - **_npm i_**

   4. Start the app with the command - **_npm start_**
  


## API ENDPOINTS 
  | S.No | Method |Endpoints | Description |   Request body  | Status Code | Response | Authorization |
 |-----:|-----|---------------|-----------|----------------|------------|----------|------------------|
 |     1| `POST` |`/api/user/register`|   Singup endpoint        |  `email`, `password`,`username`, `roles` : `[VIEWALL or CREATOR or VIEWER]`              |   `201`         | Registration successful | - |
 |     2|  `POST` |`/api/user/login`           |   Login endpoint        |     `email` , `password`           |  `201`          |  Login Successful , `token`| - |
 |     3|  `POST` | `/api/books`           |    create books       |      `title`, `description`          |       `201`     |  Book created ,  `Bookdata`| `bearer ${token}` |
 |     4|  `GET` | `/api/books`         |    get books data      |      `query` <br /> `old=1` for  book data created  10 minutes ago and more <br /> `new=1` for book data that were created  less than 10 minutes ago       |       `201`     |  Book created ,  `Bookdata` | `bearer ${token}` | 


## Deployed Link -  https://library-app-vjot.onrender.com

## Dummy User Credentails

 ### Role - `VIEWER` and `CREATOR`
     > email : "anuj22rawat20@gmail.com" password : "anuj"

### Role - `VIEW_ALL`
    > email : "admin@gmail.com" password : "admin"



  
