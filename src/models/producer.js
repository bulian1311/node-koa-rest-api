const mongoose = require('mongoose');
const { Schema } = mongoose;

const producerSchema = Schema({
  name: { type: String, required: true, unique: true },
  url: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('producer', producerSchema);
