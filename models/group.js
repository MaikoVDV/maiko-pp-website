const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listedUserSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    pfp: {
        type: String,
        default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F00%2F64%2F67%2F63%2F360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg&f=1&nofb=1"
    }
})
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
        type: [listedUserSchema],
        default: []
    },
    cardIds: {
        type: [String],
        default: []
    }
})

module.exports = Group = mongoose.model('group', groupSchema)