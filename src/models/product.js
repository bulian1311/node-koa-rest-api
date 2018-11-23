const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  title: { type: String, required: true },

  description: { type: String, required: true },

  price: { type: String, required: true },

  url: { type: String, required: true },

  images: [{ url: { type: String, unique: true }, alt: String }],

  producer: { type: Schema.Types.ObjectId, ref: 'producer' },

  tags: [{ type: Schema.Types.ObjectId, ref: 'tag' }]
});

module.exports = mongoose.model('product', productSchema);
