const express = require('express');
const router = express.Router();

let immagini = [];

// Endpoint per aggiungere un'immagine
router.post('/add', (req, res) => {
  const immagine = req.body;
  immagini.push(immagine);
  res.status(201).send(immagine);
});

// Endpoint per ottenere tutte le immagini
router.get('/', (req, res) => {
  res.send(immagini);
});

module.exports = router;
