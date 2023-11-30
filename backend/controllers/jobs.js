// @desc    Get all jobs
// @route   GET /api/v1/jobs
// @access  Public
export const getJobs = (req, res, next) => {
  return res.status(200).json({ msg: "get all jobs" });
};

// @desc    Get a single job
// @route   GET /api/v1/jobs/:id
// @access  Public
export const getJob = (req, res, next) => {
  return res.status(200).json({ msg: `get job with id ${req.params.id}` });
};

// @desc    Get a single job
// @route   POST /api/v1/jobs
// @access  Private
export const createJob = (req, res, next) => {
  return res.status(200).json({ msg: "create a new job" });
};

// @desc    Get a single job
// @route   POST /api/v1/jobs/:id
// @access  Private
export const updateJob = (req, res, next) => {
  return res.status(200).json({ msg: `update job with id ${req.params.id}` });
};

// @desc    Get a single job
// @route   POST /api/v1/jobs/:id
// @access  Private
export const deleteJob = (req, res, next) => {
  return res.status(200).json({ msg: `delete job with id ${req.params.id}` });
};
