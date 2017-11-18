const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// CONNECT TO DATABASE
mongoose.connect(config.database);

// ON DB CONNECTION
mongoose.connection.on('connected', () => {
    console.log('Connected to database' + config.database);
});

// ON DB CONNECTION ERROR
mongoose.connection.on('error', (err) => {
    console.log('Database error' + err);
});

const app = express();

const users = require('./routes/users');

// ASSIGN PORT
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);

// INDEX ROUTE
app.get('/', (req, res) => {
    res.send('invalid endpoint');
});

// START SERVER
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});