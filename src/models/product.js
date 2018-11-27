const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  title: { type: String },

  description: { type: String },

  price: { type: String },

  url: { type: String },

  images: [{ url: { type: String, unique: true }, alt: String }],

  producer: { type: String },

  tags: [{ type: String }]
});

module.exports = mongoose.model('product', productSchema);
