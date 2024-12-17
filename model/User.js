
const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
  name: String,
  recipes: [ {type: Schema.Types.ObjectId,
      ref: 'Recipe',
    },
  ],
  password: String,
});

module.exports = model('User', UserSchema);