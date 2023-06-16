const express = require('express');
const ProfileController = require('../controller/profile.js');
const AccountController = require('../controller/accounts.js');
const router = express.Router();

router.get('/', ProfileController.getProfile);
router.get('/:UserID', ProfileController.getProfileByID);
//router.get('/:UserID', AccountController.getAccountsByID);
router.post('/', ProfileController.postProfile);

router.patch('/:UserID', ProfileController.postProfile);

router.delete('/:UserID', ProfileController.deleteProfile);

module.exports = router;