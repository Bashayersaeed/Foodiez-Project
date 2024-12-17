const mongoose = require('mongoose');
const Recipe = require('./Recipe');

const CategorySchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: [{ type: mongoose.Types.ObjectId, ref: "Recipe"}]
});

module.exports = mongoose.model('Category', CategorySchema);