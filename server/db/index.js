const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/missing_kids_DB', {useNewUrlParser: true});

module.exports = mongoose;