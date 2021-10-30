const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    userIds: {
        type: [String],
        default: []
    },
    cardIds: {
        type: [String],
        default: []
    }
})

module.exports = Group = mongoose.model('group', groupSchema)