const express = require('express');
const UploadController = require('../controller/upload.js');
const router = express.Router();
const upload = require('../middleware/multer.js');

router.post('/', upload.single('photo'), UploadController.postUpload);

module.exports = router;