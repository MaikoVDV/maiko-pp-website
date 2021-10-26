const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cardSchema = new Schema({
    title: {
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
    }
})

module.exports = Card = mongoose.model('card', cardSchema)