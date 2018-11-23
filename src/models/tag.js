const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = Schema({
  title: { type: String, required: true },

  products: [{ type: Schema.Types.ObjectId, ref: 'product' }]
});

module.exports = mongoose.model('tag', tagSchema);
