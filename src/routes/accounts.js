const express = require('express');
const AccountController = require('../controller/accounts.js');
const ProfileController = require('../controller/profile.js');
const router = express.Router();

//READ
router.get('/', AccountController.getAccounts);

//READ BY ID
//router.get('/:UserID', AccountController.getAccountsByID);

//CREATE
router.post('/', AccountController.postAccounts);

//UPDATE
router.patch('/:UserID', AccountController.putAccounts);

//DELETE
router.delete('/:UserID', ProfileController.deleteProfile);

module.exports = router;