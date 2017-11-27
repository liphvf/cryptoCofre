// @ts-check
// Get dependencies
const mongoose = require('mongoose')
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect('mongodb://test:test@ds115396.mlab.com:15396/criptocofre', { useMongoClient: true });
mongoose.Promise = global.Promise;

// Get models
const User = require('./server/models/users');
const Password = require('./server/models/passwords');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, "dist")));

// Get our API routes
const userRoute = require("./server/routes/userRoute");
const passwordRoute = require("./server/routes/passwordRoute");
const authRoute = require("./server/routes/authRoute");

// Set our api routes
app.use("/api/user", userRoute);
app.use("/api/password", passwordRoute);
app.use("/api/auth", authRoute);

// Catch all other routes and return the index file
app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "dist/index.html"));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || "3000";
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

server.on('error', (err) => {
  console.log(err.message);
});