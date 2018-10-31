const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  title: { type: String, required: true },

  description: { type: String, required: true },

  price: { type: String, required: true },

  url: { type: String, required: true },

  images: [{ url: String }]
});

module.exports = mongoose.model('product', productSchema);
