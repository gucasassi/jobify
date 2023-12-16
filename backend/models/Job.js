// Imports
import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

const { Schema, model } = mongoose;

// Defining the Job schema
const JobSchema = new Schema(
  {
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Position title is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: {
        values: Object.values(JOB_STATUS),
        message: "{VALUE} is not a valid job status",
      },
      default: JOB_STATUS.PENDING,
    },
    type: {
      type: String,
      enum: {
        values: Object.values(JOB_TYPE),
        message: "{VALUE} is not a valid job type",
      },
      default: JOB_TYPE.FULL_TIME,
    },
    location: {
      type: String,
      default: null,
      trim: true,
    },
  },
  { timestamps: true }
);

// Export 'Job' as model name
export default model("Job", JobSchema);
