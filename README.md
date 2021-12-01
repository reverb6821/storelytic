# What is Storelytic?
**Storelytic is a PWA builded on a top of Express.JS as server and React.js as front end to manage warehouse and inventory.**

## Functionality:
- CRUD operation on Product
- CRUD operation on Warehouse
- Manage expedition
- 3 level of users (admin, mod and user)

### Project Structure
## Main
```
.
├── api                             # API root file
├── client                          # React root directory
├── .env                            # Enviroment variables for API
├── .gitignore
└── package.json
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
└── server.ts                            # Entry file
```

## Client's Root
```
.
├── public                                # Root folder that gets served up as our react app.
├── src                                   # React root folder
│   ├── assets                            # Custom style & fonts
│   ├── common                            # Common files
│   ├── context                           # Context Provider setup folder
│   ├── components                        # Component's creation
│   ├── pages                             # All pages are mounted here
│   ├── services                          # Services for the app
│   └──  slices                           # Redux services, a collection of Redux reducer logic and actions for a single feature.
├── App.js                                # Basic React Components 
├── index.js                              # This files renders our component and registers service workers
├── index.scss                            # Contains styles of our react component 
├── serviceWorker.js                      # Service worker for pre-caching the scripts files of our react app thereby improving performance. 
├── reportWebVitals.js                    # Where endpoints are stored
└── redux.js                              # Redux configuration
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
### Front End
* [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [tailwindcss](https://tailwindcss.com/docs) - A utility-first CSS framework packed with classes🏾.
* [formik](https://formik.org/docs/overview) - Formik is the world's most popular open source form library for React and React Native.
* [yup](https://www.npmjs.com/package/yup) - JavaScript schema builder for value parsing and validation.
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [redux/toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development.

## Endpoint:
### Users authorization Endpoints
```
GET /api/test/all       # Public access
GET /api/test/user      # Loggedin users (role: user/moderator/admin)
GET /api/test/mod       # Users having moderator role
GET /api/test/admin     # Users having admin role
```
### Authentication Endpoints
```
POST /api/auth/signup       # Registration request (soon removed)
POST /api/auth/signin       # Login request
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
