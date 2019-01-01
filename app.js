const express = require('express');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
const routes = require('./routes/api');

// Set up Express app
const app = express();

app.use(bodyParser.json());
// Initialize routes
app.use('/api', routes);

// Listen for requests
app.listen(process.env.port || 4001, () => {
    console.log('Listening port 4001');
});
