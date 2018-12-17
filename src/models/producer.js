const mongoose = require('mongoose');
const { Schema } = mongoose;
const findOrCreate = require('mongoose-findorcreate');

const producerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  url: { type: String, required: true, unique: true }
});

producerSchema.plugin(findOrCreate);

module.exports = mongoose.model('producer', producerSchema);
