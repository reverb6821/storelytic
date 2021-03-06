# What is Storelytic?
**Storelytic is a PWA builded on a top of Express.JS as server and Angular as front end to manage warehouse and inventory.**

## Functionality:
- CRUD operation on Product
- CRUD operation on Warehouse
- Manage expedition

### Project Structure
## Main
```
.
├── api                             # API root file
├── client                          # React root directory
├── .gitignore
└── package.json                    # Core package of the app
```

## API's Root
```
.
├── lib                                  # library file
├── migration                            # migration file
├── src                                  # core file
│   ├── entity                           # all typeorm entities class
|   ├── controllers                      # Controllers folder
|   ├── middlewares                      # middlewares folder
|   └── routes                           # routes file 
├── server.ts                            # Entry file
└── package.json                         # API package
```


## Built With
### Back End:
* [express.js](https://expressjs.com/it/) - Used to create handle routing and process requests from the client.
* [cors](https://github.com/expressjs/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [http-status](https://github.com/adaltas/node-http-status) - Utility to interact with HTTP status code in Node.js.
* [helmet](https://github.com/helmetjs/helmet) - Help secure Express apps with various HTTP headers.
* [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js.
* [winston](https://github.com/winstonjs/winston) - A logger for just about everything.
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JsonWebToken implementation for node.js.
* [typeorm](https://typeorm.io/#/) - TypeORM is an ORM Its goal is to always support the latest JavaScript features and provide additional features that help you to develop any kind of application that uses databases.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Optimized bcrypt in JavaScript with zero dependencies.
* [multer](https://github.com/expressjs/multer) - nodejs middleware for file upload.
* [swagger](https://swagger.io/) - Tool for API development.


## Endpoint:
### Authentication Endpoints
```
POST /auth/login            # login endpoint
```
### Users Endpoints
```
GET  /users/userslist             # get all users (All Roles)
GET  /users/user:id([0-9]+)       # get user by id (All Roles)
POST /users/newuser               # create new user (Only Admin)
PUT  /users/edituser:id([0-9]+)   # edit user (Only Admin & User:id)
DEL  /users/deleteuser:id([0-9]+) # delete user (Only Admin)
```
### Product Endpoints
```
GET  /products/productslist             # get all products (All Roles)
GET  /products/product:id([0-9]+)       # get product by id (All Roles)
POST /products/newproduct               # create new product (Only Admin)
PUT  /products/editproduct:id([0-9]+)   # edit product (Only Admin)
DEL  /products/deleteproduct:id([0-9]+) # delete product (Only Admin)
```
### Company Endpoints
```
GET  /companies/companieslist            # get all products (All Roles)
GET  /companies/company:id([0-9]+)       # get product by id (All Roles)
POST /companies/newcompany               # create new product (Only Admin)
PUT  /companies/editcompany:id([0-9]+)   # edit product (Only Admin)
DEL  /companies/deletecompany:id([0-9]+) # delete product (Only Admin)
```
### Warehouse Endpoints
```
GET  /warehouses/warehouseslist             # get all products (All Roles)
GET  /warehouses/warehouse:id([0-9]+)       # get product by id (All Roles)
POST /warehouses/newwarehouse               # create new product (Only Admin)
PUT  /warehouses/editwarehouse:id([0-9]+)   # edit product (Only Admin)
DEL  /warehouses/deletewarehouse:id([0-9]+) # delete product (Only Admin)
```
### Upload Endpoints
```

```
### Create Migration file
```
typeorm migration:create -n "file"
```
## How it work
### Authentication

The app use a token based authentication with the JSON Web Token (JWT). The server is giving the token, and it will be intercepted on client side with an http request and stored on local storage (for browser), keychan (iOS) and SharedPreferences (Android).

The app is giving a token via Express Endpoints, then if HTTP request is matching it will be checked by CORS Middleware before coming to Security layer.

The Security layer is composed by:

- JWT Authentication Middlewar;
- Authorization Middleware, check User’s roles with record in database;
 
If these middlewares throw any error, a message will be sent as HTTP response.

### CRUD Operation
