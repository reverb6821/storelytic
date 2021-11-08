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
├── src                                   # react root folder
│   ├── assets                            # Public root file
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
