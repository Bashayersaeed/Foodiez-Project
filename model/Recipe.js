const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true},
    category: {type: String, required: true},
    ingredients: [{ type: mongoose.Types.ObjectId, ref: "ingredients"}],
    instructions: { type: String, reqiured: true},
    creator: { type: mongoose.Types.ObjectId, ref:"User"}
});

module.exports = mongoose.model('Recipe', RecipeSchema);