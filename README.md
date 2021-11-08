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
├── config                               # All Configuration files
├── controllers                          # Part of the application that handles the user interaction
├── middleware                           # Hidden translation layer, middleware enables communication and data management
├── models                               # The model component stores data and its related logic
├── routes                               # Where endpoints are stored 
└── server.js                            # Entry file
```

## Client's Root
```
.
├── public                                # Root folder that gets served up as our react app.
├── src                                   # React root folder
│   ├── assets                            # Custom style & fonts
│   ├── common                            # Common files
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

## Task List
- [x] Add React
- [x] Add Tailwind
- [x] Complete Signin cycle on React
- [ ] Token Expires on server
- [ ] React token refresh
- [ ] Set pages divided as roles
- [ ] Add Item
- [ ] Add CRUD operation on Item and give it to roles 
- [ ] Restyle App
