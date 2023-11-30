// Importing required modules
import dotenv from "dotenv";
import morgan from "morgan";
import express from "express";
import jobs from "./routes/jobs.js";

// Load environment variables
dotenv.config(".env");

// Create an express app.
const app = express();

// Morgan logger
app.use(morgan("dev"));

// Mount Routes
app.use("/api/v1/jobs", jobs);

// Define the port to run the server on
const PORT = process.env.APP_PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
