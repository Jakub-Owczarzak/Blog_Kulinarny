const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users',
  },
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;
