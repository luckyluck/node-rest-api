const express = require('express');

// Set up Express app
const app = express();

app.get('/', (req, res) => {
    res.send('OK');
});

// Listen for requests
app.listen(process.env.port || 4000, () => {
    console.log('Listening port 4000');
});
