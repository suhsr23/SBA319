const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
    theaterId: { type: Number, required: true, unique: true },
    location: {
        address: {
            street1: String,
            city: String,
            state: String,
            zipcode: String
        },
        geo: {
            type: { type: String, default: 'Point' },
            coordinates: { type: [Number], index: '2dsphere' }
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Theater', theaterSchema);
