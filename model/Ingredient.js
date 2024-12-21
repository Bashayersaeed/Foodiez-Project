const mongoose = require('mongoose');

const IngredientsSchema = new mongoose.Schema({
    name: { type: String, required: true},
    recipes: [{ type: mongoose.Types.ObjectId, ref: "Recipe"}]
   
  
});

module.exports = mongoose.model('Ingredients', IngredientsSchema);