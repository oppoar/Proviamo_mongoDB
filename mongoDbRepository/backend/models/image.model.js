const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  path: { type: String, required: true },
  size: { type: Number },        // peso in byte
  width: { type: Number },       // larghezza in pixel
  height: { type: Number },      // altezza in pixel
}, { timestamps: true });

module.exports = mongoose.model('Image', imageSchema);
