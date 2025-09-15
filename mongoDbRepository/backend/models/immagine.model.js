const mongoose = require('mongoose');

const immagineSchema = new mongoose.Schema({
  idImg: { type: Number, required: true },
  img: { type: String, required: true },
  size: { type: Number },
  tag: { type: Array }
},
{
  collection: 'oppoImages' 
});

// Specifica il nome della collezione come 'immagini'
module.exports = mongoose.model('Immagine', immagineSchema);
