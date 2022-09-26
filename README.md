# What is Storelytic?
**Storelytic is a PWA builded on a top of Express.JS as server and React as front end to manage inventory.**

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
* [sequelize](https://sequelize.org/docs/v6/) - Sequelize is a promise-based Node.js ORM tool.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Optimized bcrypt in JavaScript with zero dependencies.
* [multer](https://github.com/expressjs/multer) - nodejs middleware for file upload.
* [swagger](https://swagger.io/) - Tool for API development.
### Front End:
* [React](https://it.reactjs.org/) - Front End library.
* [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development.
* [react-router-dom](https://reactrouter.com/en/v6.3.0/getting-started/overview) - React Router is a lightweight, fully-featured routing library for the React JavaScript library..
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes.
* [Flowbite](https://flowbite.com/) - Open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.
* [Formik](https://formik.org/docs/overview) - Formik is the world's most popular open source form library for React and React Native.
* [yup](https://www.npmjs.com/package/yup) - Yup is a JavaScript schema builder for value parsing and validation.
* [react-icons](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easily with react-icons.
  

How to use
*  `run db:migrate`
* `run db:seed:all`
* on db assign user roles manually on user_roles table, in this order:
  *  ADMIN = USER/MODERATOR/ADMIN
  *  MODERATOR = USER/MODERATOR
  *  USER = USER

role permission:
* user can only show
* Admin and moderator can do operation on product (add/update/delete/delete all)
# NEXT
rework on product (add image)
migrate to knex