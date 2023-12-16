// Importing required modules
import fs from "fs";
import path from "path";
import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Import model
import Job from "./models/Job.js";

// Load en vars
dotenv.config(".env");

// Connect to DB
mongoose.connect(process.env.MONGODB_URI);

// Read Jobs form JSON file
const jobs = JSON.parse(
  fs.readFileSync(`${path.dirname(".")}/_data/jobs.json`, "utf-8")
);

// Import jobs into database
const importData = async () => {
  try {
    await Job.create(jobs);

    console.log(`Data imported`.green);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete bootcamps from database
const deleteData = async () => {
  try {
    await Job.deleteMany();

    console.log(`Data deleted`.yellow);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
