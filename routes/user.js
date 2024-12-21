const express = require('express');
const { signup, login, logout } = require('../controller/usercontroller');

const router = express.Router();

// Define the controller functions first

// Define routes after the controller functions
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;

