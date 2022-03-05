var express = require('express');
var router = express.Router();

/* GET Landing Page. */
router.get('/', function(req, res, next) {
  res.render('landingpage');
});



// router.get('/landingpage',  ctrl.getlandingpage)

module.exports = router;
