const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

const hostDB =
  process.env.mongodb ||
  'mongodb+srv://cluster:cluster@cluster0.pzifq.mongodb.net/FitAPP?retryWrites=true&w=majority';

module.exports = {
  hostDB,
};
