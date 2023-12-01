// @desc    Get all jobs
// @route   GET /api/v1/jobs
// @access  Public
export const getJobs = (req, res, next) => {
  return res.status(200).json({ success: true, message: "get all jobs" });
};

// @desc    Get a single job
// @route   GET /api/v1/jobs/:id
// @access  Public
export const getJob = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, message: `get job with id ${req.params.id}` });
};

// @desc    Get a single job
// @route   POST /api/v1/jobs
// @access  Private
export const createJob = (req, res, next) => {
  return res.status(200).json({ success: true, message: "create a new job" });
};

// @desc    Get a single job
// @route   POST /api/v1/jobs/:id
// @access  Private
export const updateJob = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, message: `update job with id ${req.params.id}` });
};

// @desc    Get a single job
// @route   POST /api/v1/jobs/:id
// @access  Private
export const deleteJob = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, message: `delete job with id ${req.params.id}` });
};
