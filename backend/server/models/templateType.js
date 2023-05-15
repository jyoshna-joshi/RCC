const mongoose = require('mongoose')

const templateType = mongoose.Schema({
    type: {
        type: String
    },
    fields: {
        type: [Object]
    }
});
  
const TemplateType = mongoose.model('Template-type', templateType);
module.exports = TemplateType;