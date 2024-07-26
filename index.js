require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const movieRoutes = require('./routes/movies');
const theaterRoutes = require('./routes/theaters');
const userRoutes = require('./routes/users');

app.use('/movies', movieRoutes);
app.use('/theaters', theaterRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
