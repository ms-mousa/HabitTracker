/**
 * Keep in mind we have two variables:
 * App is NextJS and handles most of the routes and rendering
 * Server is ExpressJS and handles all the backend/api requests
 */

//Import some packages and env variables
require("dotenv").config();
const express = require("express");
const http = require("http");
const next = require("next");
const db = require("mongoose");
const URI = require("./secrets");
const bodyParser = require("body-parser");
const userApi = require("./apis/userAPI");
const stepsApi = require("./apis/stepsAPI");

//Initialize the app as a next app in dev mode
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  dir: "./src"
});

// Initiate the server, prepare Next first then run the express server
app.prepare().then(() => {
  // use express as the server
  const server = express();

  //   Use bodyparser on all the server requests
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  //Connect to database
  db.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection to db successful"))
    .catch(err => console.log(err));

  // middleware functions go here
  server.use(userApi);
  server.use(stepsApi);

  // handling everything else with Next.js
  server.get("*", app.getRequestHandler());

  //start the server listening on the port from env vari
  http.createServer(server).listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});
