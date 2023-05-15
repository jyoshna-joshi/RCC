const mongoose = require('mongoose')

const content = mongoose.Schema({
    contributor: {
        type: String
    },
    coverage: {
        type: String
    },
    creator: {
        type: String,
        default: "public"
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
        type: String
    },
    timestamp: {
        type: String
    }
});
  
const Content = mongoose.model('Content', content);
module.exports = Content;