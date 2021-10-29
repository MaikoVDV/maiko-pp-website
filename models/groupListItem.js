const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupListItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = GroupListItem = mongoose.model('groupListItem', groupListItemSchema)