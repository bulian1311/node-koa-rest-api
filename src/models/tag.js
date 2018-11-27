const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = Schema({
  title: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('tag', tagSchema);
