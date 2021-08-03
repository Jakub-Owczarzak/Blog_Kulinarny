const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

const hostDB =
  process.env.mongodb ||
  'mongoDB cluster link';

module.exports = {
  hostDB,
};
