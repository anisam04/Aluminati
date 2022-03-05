var express = require('express');
var router = express.Router();
const ctrljobs = require('../controller/jobscontroller')


// Job Postings Page //

router.get('/jobs', ctrljobs.getAllJobs);

// New Job posting //
router.get('/newjob', ctrljobs.jobForm);

// Create New Job //
router.post('/jobs', ctrljobs.createNewJob);

module.exports = router;
