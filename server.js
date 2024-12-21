const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./database')
const passport = require('passport');
const { jwtStrategy } = require('./passport');
dotenv.config();
const PORT = process.env.PORT || 8000;

// Passport
app.use(passport.initialize());
// passport.use(localStrategy);
passport.use(jwtStrategy);

app.use(express.json());
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/users', require('./routes/user'));

connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
