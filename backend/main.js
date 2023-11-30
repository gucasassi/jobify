// Importing required modules
const dotenv = require("dotenv");
const express = require("express");

// Load environment variables
dotenv.config(".env");

// Create an express app.
const app = express();

// Define a route handler just for test
app.get("/", (req, res) => {
  res.send("Hi there!");
});

// Define the port to run the server on
const PORT = process.env.APP_PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
