const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobsSchema = new Schema({
    roleName: String,
    roleDescription: String,
    roleLink: String,
    alumni: {
        type: Schema.Types.ObjectId,
        ref: 'Alumni'
    }

    }, {
        timestamps: true
});

module.exports = mongoose.model('Job', jobsSchema);
