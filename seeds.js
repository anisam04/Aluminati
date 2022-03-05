require('./config/database')

const Cohort = require('./models/cohortmodel')

Cohort.create({cohortName: 'SEI',
    cohortdescription: 'lorem ipsum' })


console.log('Seeds file is running!')