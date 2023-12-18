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

// Fallback route for unmatched requests
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Can not ${req.method} ${req.originalUrl}`,
  });
});

// app.use((err, req, res, next) => {
//   console.log(err);
//   const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
//   const msg = err.message || "something went wrong, try again later";
//   res.status(statusCode).json({ msg });
// });

// Define the port to run the server on
const PORT = process.env.APP_PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`.cyan);
});
