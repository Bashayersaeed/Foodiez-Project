const express = require('express');
const router = express.Router();
const Recipe = require('../model/Recipe');
const passport = require('passport');

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find(); 
        res.json(recipes);
   } catch (err) {
    res.status(500).json({ message: err.message});
   }
});


router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const recipe = new Recipe({
        ...req.body,
        creator:  req.user.id  // Add the user ID from the authenticated request
    });
    try {
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});



module.exports = router;