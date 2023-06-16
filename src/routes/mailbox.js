const express = require('express');
const MailboxController = require('../controller/mailbox.js');

const router = express.Router();

//READ
router.get('/', MailboxController.getMailbox);



module.exports = router;