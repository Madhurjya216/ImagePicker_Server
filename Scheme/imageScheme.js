const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    id: {
        type: 'Number',
        required: true, 
    },
    name: {
        type: 'String',
        required: true, 
    },
    category: {
        type: 'String',
        required: true, 
    },
    image: {
        type: 'String',
        required: true, 
    }
})

const data = mongoose.model('Image', imageSchema);

module.exports = data