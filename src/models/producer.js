const mongoose = require('mongoose');
const { Schema } = mongoose;

const producerSchema = Schema({
  url: { type: String, required: true }
});

module.exports = mongoose.model('producer', producerSchema);
