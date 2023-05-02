const mongoose = require('mongoose')

const template = mongoose.Schema({
    contributor: {
        type: String
    },
    coverage: {
        type: String
    },
    creator: {
        type: Number
    },
    date: {
        type: Date
    },
    description: {
        type: String
    },
    format: {
        type: String
    },
    identifier: {
        type: String
    },
    language: {
        type: String
    },
    publisher: {
        type: String
    },
    relation: {
        type: String
    },
    rights: {
        type: String
    },
    source: {
        type: String
    },
    subject: {
        type: String
    },
    title: {
        type: String
    },
    type: {
        type: String
    },
    status: {
        type: String,
        default: "processing"
    }
});
  
const Template = mongoose.model('Template', template);
module.exports = Template;