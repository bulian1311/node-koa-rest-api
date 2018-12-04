const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  title: { type: String },

  shortDescription: { type: String },

  fullDescription: { type: String },

  price: { type: String },

  url: { type: String },

  images: [{ url: { type: String }, alt: String }],

  producer: { url: String },

  tags: [{ title: String }]
});

module.exports = mongoose.model('product', productSchema);
