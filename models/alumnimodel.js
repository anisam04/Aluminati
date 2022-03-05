const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const alumniSchema = new Schema({
    alumniName: {
        type:String,
        min: 1
    },
    cohort: {
        type: Schema.Types.ObjectId,
        ref: 'Cohort'
    },
    designation:{
        type:String
    },
    company: {
        type: String
    },
    contactNumber: {
        type: Number
    },
    contactEmail: {
        type: String
    },
})

module.exports = mongoose.model('Alumni', alumniSchema);

