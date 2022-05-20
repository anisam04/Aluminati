// const alumniSchema = require('../models/alumnimodel');
const jobsSchema = require('../models/jobsmodel');

async function getAllJobs(req, res) {
    const allJobs = await jobsSchema.find({})
    res.render('job postings/alljobs', {jobs: allJobs})
}

function jobForm(req, res) {
    res.render('job postings/newjob', {
        title: 'Post a Job'
    });
}

function createNewJob(req, res) {
    let newjobdata = req.body;
    console.log(req.body);
    jobsSchema.create(newjobdata, function(err){
        if(err) {
            res.send(`Error!! ${err.message}`)
        } else {
            res.redirect('/jobs');
        }
    })

}

module.exports ={
    getAllJobs,
    jobForm,
    createNewJob
}