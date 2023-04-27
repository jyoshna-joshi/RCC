const Template = require('../models/template')
const aws = require('../config/awsconfig')
var functions = {
    saveTemplate: async function (req, res, next) {
        if (!req.file) {
            res.status(400).json({ error: 'Please select a file to upload' });
        }else{
            console.log(req.file, req.body)
        }
        const params = {
            Bucket: aws.bucket_name,
            Key: req.body.uploadImageName,    // replace space in a filename with hyphen
            Body: req.file.buffer,
            ACL: 'public-read'
        };

        console.log('Starting file upload op');
       await aws.client.upload(params, (err, data) => {
            if (err) {
                // console.log(err);
                res.status(500).json({ error: 'Error while uploading file'+ err });
            } else {
                // console.log(data);
                res.status(204).json({
                    message: 'File uploaded successfully',
                    object_url: `${data.Location}`
                });
            }
        });
    }
}

module.exports = functions