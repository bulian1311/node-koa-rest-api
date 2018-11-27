const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = Schema({
  title: { type: String, required: true }
});

module.exports = mongoose.model('tag', tagSchema);
