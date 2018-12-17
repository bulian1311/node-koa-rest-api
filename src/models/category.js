const mongoose = require('mongoose');
const { Schema } = mongoose;
const findOrCreate = require('mongoose-findorcreate');

const categorySchema = new Schema({
  title: { type: String, unique: true, required: true }
});

categorySchema.plugin(findOrCreate);

module.exports = mongoose.model('category', categorySchema);
