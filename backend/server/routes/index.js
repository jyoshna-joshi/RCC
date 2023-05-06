const express = require('express')
const router = express.Router()
const actions = require('../methods/actions')
const multer = require("multer");
const upload = multer();
router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/template/fields', actions.fetchFieldsByType) // form fields by type
router.post('/template/add-update', actions.addUpdateTemplateType) // adding / updating forms and form fields
router.get('/template/types', actions.fetchTemplateTypes) // listing types of forms
router.delete('/template', actions.removeTemplate) // removing form

router.post('/content/save', upload.single('format'), actions.saveTemplate) // save content
router.post('/content/update-status/:id', actions.updateStatus) // update status of content by id
router.get('/content/list-by-status', actions.listByStatus) // list contents by status
router.get('/content/list-by-creator', actions.fetchContentUploadedByCreator) // list contents uploaded by crerator
router.get('/content/:id', actions.fetchContentById) // fetch content by id

module.exports = router