const mongoose = require('mongoose');

//Category Model processed by Mongoose(for populated queries)
require('./category');
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);