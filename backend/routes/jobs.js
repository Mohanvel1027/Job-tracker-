const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const auth = require('../middleware/auth');
const { validateJob } = require('../middleware/validation');

// Create a job
router.post('/', auth, validateJob, async (req, res) => {
  try {
    const job = new Job({ ...req.body, createdBy: req.user.id });
    await job.save();
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get all jobs for logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const jobs = await Job.find({ createdBy: req.user.id });
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Update a job
router.put('/:id', auth, validateJob, async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      req.body,
      { new: true }
    );
    if (!job) return res.status(404).json({ msg: 'Job not found' });
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete a job
router.delete('/:id', auth, async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({ _id: req.params.id, createdBy: req.user.id });
    if (!job) return res.status(404).json({ msg: 'Job not found' });
    res.json({ msg: 'Job removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
