const express = require('express');
const router = express.Router();

// Get a list of ninjas from the DB
router.get('/ninjas', (req, res) => {
    res.send({ type: 'GET' });
});

// Add a new ninja to the DB
router.post('/ninjas', (req, res) => {
    res.send({ type: 'POST' });
});

// Update a ninja in the DB
router.put('/ninjas/:id', (req, res) => {
    res.send({ type: 'PUT' });
});

// Delete a ninja from the DB
router.delete('/ninjas/:id', (req, res) => {
    res.send({ type: 'DELETE' });
});

module.exports = router;
