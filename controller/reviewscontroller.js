const alumniSchema = require('../models/alumnimodel');
const cohortSchema = require('../models/cohortmodel');

async function getReviews(req, res){
    const allReviews = await cohortSchema.find({});
    res.render('reviews/seireviews')
}

function newReviewForm(req, res){
    res.render('reviews/seireviews', {
        title: 'Add new Review'
    });
}

function createNewReview(req, res) {
    cohortSchema.create({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age
    }, function(err, newpuppy){
      // res.json(newpuppy);
      res.redirect('/api/puppies')
    })
      // res.send('create');
  }

module.exports ={
    // getReviews,
    // newReviewForm,
    // createNewReview
}