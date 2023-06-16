const express = require('express');
const LandingController = require('../controller/landing.js');
const router = express.Router();

router.get('/', LandingController.landingPage);
router.get('/editprofile/:UserID', LandingController.editPage);
router.get('/helpform', LandingController.getHelp);

module.exports = router;