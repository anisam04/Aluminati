var express = require('express');
var router = express.Router();
const ctrlAlumni = require('../controller/alumnicontroller')


// Alumni Page //
router.get('/allalumni', ctrlAlumni.getAllAlumni);

// New Alumni Form //
router.get('/addalumni', ctrlAlumni.newAlumniForm);

// Create New Alumni //
router.post('/allalumni', ctrlAlumni.createNewAlumni);

// Redirect to Delete Alumni Page//
router.get('/alumni/:id', ctrlAlumni.showAlumni);

// Update Alumni details//
router.put('/alumni/:id', ctrlAlumni.updateAlumni);

// Delete an Alumni//
router.delete('/alumni/:id', ctrlAlumni.deleteAlumni);

module.exports = router;
