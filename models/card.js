const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: String
})

module.exports = Card = mongoose.model('card', cardSchema)