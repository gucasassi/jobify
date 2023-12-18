// Model
import Job from "../models/Job.js";

// @desc    Get all jobs
// @route   GET /api/v1/jobs
// @access  Public
export const getJobs = async (req, res, next) => {
  const jobs = await Job.find();
  return res
    .status(200)
    .json({ success: true, count: jobs.length, data: jobs });
};

// @desc    Get a single job
// @route   GET /api/v1/jobs/:id
// @access  Public
export const getJob = async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  // Validate Job
  if (!job) {
    return res
      .status(404)
      .json({ success: true, message: `Job with id ${id} does not exist` });
  }

  // Return success response
  return res.status(200).json({ success: true, data: job });
};

// @desc    Create new job
// @route   POST /api/v1/jobs
// @access  Private
export const createJob = async (req, res, next) => {
  const job = await Job.create(req.body);
  return res.status(201).json({ success: true, data: job });
};

// @desc    Update existing job
// @route   PUT /api/v1/jobs/:id
// @access  Private
export const updateJob = async (req, res, next) => {
  // Update Job
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  // Validate
  if (!job) {
    return res
      .status(404)
      .json({ success: false, message: `Job with id ${id} does not exist` });
  }

  // Return response
  return res.status(200).json({ success: true, data: job });
};

// @desc    Delete a job
// @route   DELETE /api/v1/jobs/:id
// @access  Private
export const deleteJob = async (req, res, next) => {
  // Get Job
  const { id } = req.params;
  const job = await Job.findById(id);

  // Validate
  if (!job) {
    return res
      .status(404)
      .json({ success: false, message: `Job with id ${id} does not exist` });
  }

  // Delete Job
  await Job.deleteOne();

  // Return response
  return res.status(200).json({ success: true, data: {} });
};
