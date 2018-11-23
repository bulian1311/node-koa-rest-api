const mongoose = require('mongoose');
const { Schema } = mongoose;

const producerSchema = Schema({
  title: { type: String, required: true },

  description: { type: String, required: true },

  url: { type: String, required: true },

  products: [{ type: Schema.Types.ObjectId, ref: 'product' }]
});

module.exports = mongoose.model('producer', producerSchema);
