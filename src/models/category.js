const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = Schema({
  title: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('category', categorySchema);
