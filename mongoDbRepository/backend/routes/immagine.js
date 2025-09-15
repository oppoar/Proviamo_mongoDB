const express = require('express');
const router = express.Router();
const Immagine = require('../models/immagine.model'); // 👈 importa il modello Mongoose

// Endpoint per aggiungere un'immagine
router.post('/add', async (req, res) => {
  try {
    const nuovaImmagine = new Immagine(req.body);
    await nuovaImmagine.save();
    res.status(201).json(nuovaImmagine);
  } catch (error) {
    res.status(400).json({ message: 'Errore nel salvataggio', error });
  }
});

// Endpoint per ottenere tutte le immagini
router.get('/', async (req, res) => {
  try {
    const immagini = await Immagine.find();
    res.json(immagini);
  } catch (error) {
    res.status(500).json({ message: 'Errore nel recupero', error });
  }
});

module.exports = router;
