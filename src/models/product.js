const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  title: { type: String },

  description: { type: String },

  price: { type: String },

  url: { type: String },

  images: [{ url: { type: String }, alt: String }],

  producer: { type: Schema.Types.ObjectId, ref: 'producer' },

  caegory: { type: Schema.Types.ObjectId, ref: 'category' },

  tags: [{ type: Schema.Types.ObjectId, ref: 'tag' }]
});

module.exports = mongoose.model('product', productSchema);
