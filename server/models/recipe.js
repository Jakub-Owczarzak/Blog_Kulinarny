const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // type: {
  //   type: String,
  //   required: true,
  // },
  // difficulty: {
  //   type: String,
  //   required: true,
  // },
  // ingredients: {
  //   type: String,
  //   required: true,
  // },
  // time: {
  //   type: String,
  //   required: true,
  // },
  description: {
    type: String,
    required: true,
  },
  // photoUrl: {
  //   type: String,
  //   default: '',
  // },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
});

const Recipes = mongoose.model('Recipes', recipeSchema);

module.exports = Recipes;
