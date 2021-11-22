const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupListItem = mongoose.Schema({
    groupId: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    }
});

const userSchema = new Schema({
    gId: {
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
    },
    groups: {
        type: [GroupListItem],
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('user', userSchema)