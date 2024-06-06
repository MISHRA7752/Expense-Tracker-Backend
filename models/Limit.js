const mongoose = require('mongoose');


const MaxSchema = new mongoose.Schema({
    maxExpance: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
}, {timestamps: true})

module.exports = mongoose.model('MaxSchema', MaxSchema)