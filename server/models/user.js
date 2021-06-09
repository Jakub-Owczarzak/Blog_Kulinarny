const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  recipes: {
    type: Array,
    default: [],
  },
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
