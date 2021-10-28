const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const cards = require('./routes/api/cards');
const groups = require('./routes/api/groups');

const config = require('config')

const app = express();

// Bodyparser middleware
app.use(express.json());

// Database config
const db = config.get('mongoURI');

// Connecting to database
mongoose.connect(db)
    .then(() => console.log("Connected to database"))
    .catch(err => console.log(err));

// Use routes
app.use('/api/cards', cards);
app.use('/api/groups', groups);

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
})
