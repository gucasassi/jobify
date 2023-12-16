// Importing required modules
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import express from "express";

import jobs from "./routes/jobs.js";
import connectMongoDB from "./configs/mongodb.js";

// Load environment variables
dotenv.config(".env");

// Connect to MongoDB
connectMongoDB();

// Create an express app.
const app = express();

// Body Parser
app.use(express.json());

// Morgan logger
app.use(morgan("dev"));

// Mount Routes
app.use("/api/v1/jobs", jobs);

// Define the port to run the server on
const PORT = process.env.APP_PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`.cyan);
});
