const express = require('express');
const router = express.Router();

const Ninja = require('../models/ninja');

// Get a list of ninjas from the DB
router.get('/ninjas', (req, res, next) => {
    res.send({ type: 'GET' });
});

// Add a new ninja to the DB
router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then(ninja => {
        res.send(ninja);
    }).catch(next);
});

// Update a ninja in the DB
router.put('/ninjas/:id', (req, res, next) => {
    res.send({ type: 'PUT' });
});

// Delete a ninja from the DB
router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove(req.params.id).then(ninja => {
        res.send(ninja);
    }).catch(next);
});

module.exports = router;
