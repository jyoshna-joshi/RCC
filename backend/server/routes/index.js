const express = require('express')
const router = express.Router()
const actions = require('../methods/actions')
const multer = require("multer");
const upload = multer();
router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/save-template', upload.single('uploadFile'), actions.saveTemplate)
module.exports = router



