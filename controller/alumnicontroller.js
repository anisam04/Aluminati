const cohortSchema = require('../models/cohortmodel')
const alumniSchema = require('../models/alumnimodel')


async function getAllAlumni(req, res){
    const allAlumni = await alumniSchema.find({})
    res.render('alumni/allalumni', {alumni: allAlumni})
}

function newAlumniForm(req, res){
    res.render('alumni/newalumni', {
        title: 'Add new Alumni'
    });
}

async function createNewAlumni(req, res){
    let alumnidata = req.body;
    console.log(alumnidata);
    let currentCohort = await cohortSchema.findOne({
        cohortName: alumnidata.cohortName,
        batchName: alumnidata.batchName
     })
     if (currentCohort == null) {
         // create new cohort here in currentCohort
        // save currentCohort
        currentCohort = await cohortSchema.create({
            cohortName: alumnidata.cohortName,
            batchName: alumnidata.batchName
         })
     }
     alumnidata.cohort = currentCohort._id;
// here i will create the new alumni and assign the id of current cohort and then save
alumniSchema.create(alumnidata, function(err){
        if(err){
            res.send(`Error!! ${err.message}`)
        } else {

            res.redirect('/allalumni');
        }
    })
}

// async function createNewAlumni(req, res) {
//     const alumnidata = req.body;
//     const currentCohort = await cohortSchema.findOne({
//         cohortName: alumnidata.cohortName,
//         batchName: alumnidata.batchName
//      })
     
//      console.log('---- current cohort ---')
//      console.log(currentCohort)
//     let newCohort = new cohortSchema({
//         cohortName: alumnidata.cohortName,
//         batchName: alumnidata.batchName
//     });
//     console.log(req.body);
//     let newAlumni = new alumniSchema(req.body);
//     newAlumni.cohort = newCohort._id;
//     // console.log(newCohort);
//     // console.log(newAlumni);
//     await newCohort.save();
//     await newAlumni.save();
//     res.redirect('/allalumni');

    // cohortSchema.create(newCohort, function(err){
    //     if(err){
    //         res.send(`Error!! ${err.message}`)
    //     } else {
    //         res.redirect('/allalumni');
    //     }
    // })
    
    // alumniSchema.create(alumnidata, function(err){
    //     if(err){
    //         res.send(`Error!! ${err.message}`)
    //     } else {
    //         res.redirect('/allalumni');
    //     }
    // })
// }

async function showAlumni(req, res){
    const alumni = await alumniSchema.findById(req.params.id).populate('cohort');
    console.log(alumni);
    res.render('alumni/showalumni', {oneAlumni: alumni})
 
}
async function deleteAlumni(req, res) {
    let deleteAlumni = await alumniSchema.deleteOne({_id: req.params.id})
    res.redirect('/allalumni')
}

// function updateAlumni(req, res) {
//     alumniSchema.findById(req.params.id, function(err, alumni){ 
//         alumni.save(function (err) {
//             if (err)
//                 res.send(err);
//             res.redirect(`/alumni/${req.params.id}`)
//         });
//     })
// }
function updateAlumni(req, res, next) {
    alumniSchema.findByIdAndUpdate(req.params.id, req.body, function (err) {
                    if (err)
                        res.send(err);
                    res.redirect(`/alumni/${req.params.id}`)
                });
      
  }

module.exports = {
    getAllAlumni,
    newAlumniForm,
    createNewAlumni,
    deleteAlumni,
    showAlumni,
    updateAlumni
}