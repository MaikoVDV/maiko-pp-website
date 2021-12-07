const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const groupListItems = require('./routes/api/groupListItems');
const groups = require('./routes/api/groups');
const getGroupById = require('./routes/api/getGroupById');
const cards = require('./routes/api/cards');
const users = require('./routes/api/users');

const config = require('config')

const app = express();

// Bodyparser middleware
app.use(express.json());
// CORS middleware to allow requests from other domains
const corsConfig = {
    methods: ["GET", "POST", "DELETE", "PUT"]
}
app.use(cors(corsConfig));

// Database config
const db = config.get('mongoURI');

// Connecting to database
mongoose.connect(db)
    .then(() => console.log("Connected to database"))
    .catch(err => console.log(err));

// Use routes
app.use('/api/groupListItems', groupListItems);
app.use('/api/groups', groups);
app.use('/api/getGroupById', getGroupById);
app.use('/api/cards', cards);
app.use('/api/users', users);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('./client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const port = process.env.PORT || 5000; //process.env.PORT || 5000
app.listen(port, () => {
    console.log("Server started on port " + port)
    console.log(cors.config)
})
