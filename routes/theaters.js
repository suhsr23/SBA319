const express = require('express');
const router = express.Router();
const Theater = require('../models/Theater');

router.post('/', async (req, res) => {
    try {
        const theater = new Theater(req.body);
        await theater.save();
        res.status(201).send(theater);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const theaters = await Theater.find();
        res.send(theaters);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:theaterId', async (req, res) => {
    try {
        const theater = await Theater.findOne({ theaterId: parseInt(req.params.theaterId) }); 
        if (!theater) return res.status(404).send('Theater not found');
        res.send(theater);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch('/:theaterId', async (req, res) => {
    try {
        const theater = await Theater.findOneAndUpdate({ theaterId: parseInt(req.params.theaterId) }, req.body, { new: true, runValidators: true });
        if (!theater) return res.status(404).send('Theater not found');
        res.send(theater);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/:theaterId', async (req, res) => {
    try {
        const theater = await Theater.findOneAndDelete({ theaterId: parseInt(req.params.theaterId) });
        if (!theater) return res.status(404).send('Theater not found');
        res.send(theater);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
