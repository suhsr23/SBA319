const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.post('/add/:id/:title', async (req, res) => {
    try {
        const { id, title } = req.params;
        
        const movie = new Movie({
            _id: id, 
            title: title, 
            plot: 'Default plot',
            type: 'movie'
        });
        await movie.save();
        res.status(201).send(movie);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
