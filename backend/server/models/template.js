const mongoose = require('mongoose')

const template = mongoose.Schema({
    firstName: String,
    lastName: String,
    year: Number,
    title: String,
    description: String,
    template_type: Number,
    imageURL: String,
    articleAttachmentURL: String
});
  
const Template = mongoose.model('Template', template);
module.exports = Template;