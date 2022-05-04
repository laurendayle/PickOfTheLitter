const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/petfinder'

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;

module.exports = db;