const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const keys = require('./config/keys');
const routes = require('./routes/api');

// Set up Express app
const app = express();

// Connect to MongoDB
mongoose.connect(keys.mongodb.url, { useNewUrlParser: true }, () => {
    console.log('Connected to the DB');
});
// Turn off deprecation
mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
// Initialize routes
app.use('/api', routes);

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(422).send({ error: error.message });
});

// Listen for requests
app.listen(process.env.port || 4001, () => {
    console.log('Listening port 4001');
});
