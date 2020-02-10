// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 3001;

// // Middleware

// // JSON parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/api/ping", (req, res) => {
//   // random endpoint so that the client can call something
//   res.json({ "msg": "pong" })
// });

// // start the Express server
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
// });

// // CORS middleware
// app.use(function (req, res, next) {
//   // Allow Origins
//   res.header("Access-Control-Allow-Origin", "*");
//   // Allow Methods
//   res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
//   // Allow Headers
//   res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization");
//   // Handle preflight, it must return 200
//   if (req.method === "OPTIONS") {
//     // Stop the middleware chain
//     return res.status(200).end();
//   }
//   // Next middleware 
//   next();
// });





// //...
// const jwt = require('jsonwebtoken');
// const jwtSecret = "mysuperdupersecret"; // Use env for secrets
// //...

// // Auth middleware
// app.use((req, res, next) => {
//   // login does not require jwt verification
//   if (req.path == '/api/login') {
//     // next middleware
//     return next()
//   }

//   // get token from request header Authorization
//   const token = req.headers.authorization

//   // Token verification
//   try {
//     var decoded = jwt.verify(token, jwtSecret);
//     console.log("decoded", decoded)
//   } catch (err) {
//     // Catch the JWT Expired or Invalid errors
//     return res.status(401).json({ "msg": err.message })
//   }




const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})

const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
})

const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  app.render(req, res, route.page, query)
})


