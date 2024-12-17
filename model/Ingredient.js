onst mongoose = require('mongoose');

const IngredientsSchema = new mongoose.Schema({
    title: { type: String, required: true},
    category: {type: String, required: true},
    ingredients: [{ type: mongoose.Types.ObjectId, ref: "ingredients"}],
    instructions: { type: String, reqiured: true},
});

module.exports = mongoose.model('Ingredients', IngredientsSchema);