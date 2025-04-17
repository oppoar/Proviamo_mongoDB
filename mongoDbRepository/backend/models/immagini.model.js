const mongoose = require('mongoose');

const immaginiSchema = new mongoose.Schema({
  idImg: { type: Number, required: true },
  img: { type: String, required: true },
  size: { type: Number },
  tag: { type: Array }
});

module.exports = mongoose.model('Immagini', immaginiSchema, 'immagini');
