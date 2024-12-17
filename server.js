const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./database')

dotenv.config();
const PORT = process.env.PORT || 8000;



app.use(express.json());
app.use('/api/recipes', require('./routes/recipes'));

connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
