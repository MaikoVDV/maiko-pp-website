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
    users: {
        type: Array,
        default: []
    },
    cards: {
        type: Array,
        required: true
    }
})

module.exports = Group = mongoose.model('group', groupSchema)