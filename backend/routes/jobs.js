// Importing Express and Controllers
import express from "express";
import {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobs.js";

// Creating a Express Router
const router = express.Router();

// Jobs Routes
// GET for fetching all jobs, POST for creating a new job
router.route("/").get(getJobs).post(createJob);

// Individual Jobs Routes
router.route("/:id").get(getJob).put(updateJob).delete(deleteJob);

// Exporting the router
export default router;
