var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.cookie('cookieName', 'cookieValue')
  res.send('Cookie made');
});

module.exports = router;
