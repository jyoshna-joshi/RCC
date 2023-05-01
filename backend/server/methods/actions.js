const Template = require('../models/template')
const aws = require('../config/awsconfig')
const templateFieldsByType = require('../config/templateFieldsByType.json')

var functions = {
    saveTemplate: async function (req, res) {
        try {
            if (!req.body) {
                res.status(400).json({ error: 'Couldn\'t find data' });
            } else {
                if (req.file) {
                    const params = {
                        Bucket: aws.bucket_name,
                        Key: req.file.originalname,    // replace space in a filename with hyphen
                        Body: req.file.buffer,
                        ACL: 'public-read'
                    };
                    await aws.client.upload(params, async (err, data) => {
                        if (err) {
                            console.log(err)
                            return res.status(500).json({ error: 'Error while uploading file'+ err })
                        } else if (data) {
                            fileName = data.Location
                            const template = new Template({
                                contributor: req?.body?.contributor,
                                coverage: req?.body?.coverage,
                                creator: req?.body?.creator,
                                date: req?.body?.date,
                                description: req?.body?.description,
                                format: fileName,
                                identifier: req?.body?.identifier,
                                language: req?.body?.language,
                                publisher: req?.body?.publisher,
                                relation: req?.body?.relation,
                                rights: req?.body?.rights,
                                source: req?.body?.source,
                                subject: req?.body?.subject,
                                title: req?.body?.title,
                                publisher: req?.body?.publisher,
                                type: req?.body?.type,
                            })
                            await template.save()
                            return res.status(200).send("Saved after uploading file!!!")
                        }
                    });
                } else {
                    const template = new Template({
                        contributor: req?.body?.contributor,
                        coverage: req?.body?.coverage,
                        creator: req?.body?.creator,
                        date: req?.body?.date,
                        description: req?.body?.description,
                        identifier: req?.body?.identifier,
                        language: req?.body?.language,
                        publisher: req?.body?.publisher,
                        relation: req?.body?.relation,
                        rights: req?.body?.rights,
                        source: req?.body?.source,
                        subject: req?.body?.subject,
                        title: req?.body?.title,
                        publisher: req?.body?.publisher,
                        type: req?.body?.type,
                    })
                    await template.save()
                    return res.status(200).send("Saved!!!")
                }
            }
        } catch(err) {
            console.error(err)
            return res.status(500).send(err)
        }
    },
    fetchFieldsByType: function (req, res) {
        try {
            let type = req.query.type
            if (type) {
                if (templateFieldsByType[type]) {
                    return res.status(200).send(templateFieldsByType[type])
                } else {
                    return res.status(500).send('Wrong template type')
                }
            } else {
                return res.status(500).send('Could not find type')
            }
        } catch(err) {
            console.error(err)
            return res.status(500).send(err)
        }
    },
    fetchTemplateById: async function(req, res) {
        try {
            if (!req.params.id) {
                return res.status(500).send('Could not find id')
            } else {
                let template = await Template.findById(req.params.id)
                if (template) return res.status(200).json(template)
                else return res.status(500).send('Could not find template')
            }
        } catch(err) {
            console.error(err)
            return res.status(500).send(err)
        }
    },
    updateStatus: async function(req, res) {
        try {
            if (!req.params.id) {
                return res.status(500).send('Could not find id')
            } else {
                await Template.updateOne({ _id: req.params.id }, { status: req.body.status })
                return res.status(200).send('Status updated')
            }
        } catch(err) {
            console.error(err)
            return res.status(500).send(err)
        }
    },
    listByStatus: async function(req, res) {
        try {
            let status = req.query.status || "pending"
            let templates = await Template.find({ status })
            return res.status(200).send(templates)
        } catch(err) {
            console.error(err)
            return res.status(500).send(err)
        }
    }
}

module.exports = functions

