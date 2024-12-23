
const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
  username: {type: String, required: true, unique: true},
  recipes: [ {type: Schema.Types.ObjectId,
      ref: 'Recipe',
    },
  ],
  password: {type: String, required: true}  ,
});

module.exports = model('User', UserSchema);