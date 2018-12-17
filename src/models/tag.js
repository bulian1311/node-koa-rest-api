const mongoose = require('mongoose');
const { Schema } = mongoose;
const findOrCreate = require('mongoose-findorcreate');

const tagSchema = new Schema({
  title: { type: String, unique: true, required: true }
});

tagSchema.plugin(findOrCreate);

module.exports = mongoose.model('tag', tagSchema);
