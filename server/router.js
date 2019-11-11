const controller = require('./controller/controller');
const router = require('express').Router();
var request = require('request');

router.get('/lostKids', controller.getLostKids);

router.get('/lostKids/:names', controller.getKidsByName);

module.exports = router;

// http://www.missingkids.com/photographs/NCMC600818e1.jpg

// https://api.missingkids.org/photographs/NCMC600818e1.jpg