const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    plot: { type: String, required: true },
    genres: [String],
    runtime: Number,
    cast: [String],
    poster: String,
    languages: [String],
    released: Date,
    directors: [String],
    writers: [String],
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    countries: [String],
    type: { type: String, required: true },
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number
        },
        production: String,
        lastUpdated: Date
    }
}, { timestamps: true });


movieSchema.index({ title: 1 });
movieSchema.index({ 'imdb.rating': -1 }); 

module.exports = mongoose.model('Movie', movieSchema);
