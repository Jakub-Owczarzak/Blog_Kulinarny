const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const config = require('./server/config/config');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.hostDB);

mongoose.connection.on('connected', () => {
  console.log('BLOG database connected');
});

app.listen(port, () => {
  console.log('Server up and running on port 8080');
});
