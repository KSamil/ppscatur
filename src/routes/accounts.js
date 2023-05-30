const express = require('express');
const AccountController = require('../controller/accounts.js');
const router = express.Router();

//READ
router.get('/', AccountController.getAccounts);

//CREATE
router.post('/', AccountController.postAccounts);

//UPDATE
router.patch('/:UserID', AccountController.putAccounts);

//DELETE
router.delete('/:UserID', AccountController.deleteAccounts);

module.exports = router;