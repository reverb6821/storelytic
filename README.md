# What is Storelytic?
**Storelytic is a PWA builded on a top of Express.JS as server and Angular as front end to manage warehouse and inventory.**

## Functionality:
- CRUD operation on Product
- USER Authority

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

How to use
1- run db:migrate
2- run db:seed:all
3- on db assign Authority to ADMIN, USER & moderator on user_roles table
(ADMIN should have all authorities, moderator user & moderator authorities, user only user aut)


# NEXT
rework on product (add qty and image)
add redux toolkit on react