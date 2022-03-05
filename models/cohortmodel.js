const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    alumni: {
        type: Schema.Types.ObjectId,
        ref: 'Alumni'
    },
    content: String,
    rating: {
        type:Number,
        min: 1,
        max: 5,
        default: 3 }
    }, {
        timestamps: true
});

const cohortSchema = new Schema({
    cohortName: {
        type: String,
        enum: ["SEI", "UX Design", "Data Science"]
    },
    cohortdescription: {
        type: String
    },
    batchName: {
        type:String
    },
    reviews: [reviewsSchema]
});

module.exports = mongoose.model('Cohort', cohortSchema);


