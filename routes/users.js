const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../config/database');
const User = require('../models/user');

// REGISTER
router.post('/register', (req, res, next) => {
    let newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
    
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            res.json({ success: true, msg: 'User registered' });
        }
    });
});

// AUTHENTICATE
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

// PROFILE
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});


module.exports = router;