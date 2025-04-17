const express = require('express');
const router = express.Router();
const multer = require('multer');
const Immagini = require('../models/immagini.model');

const upload = multer({ dest: 'uploads/' });

// Endpoint per aggiungere un'immagine
router.post('/add', upload.single('file'), async (req, res) => {
  try {
    const newImmagini = new Immagini({
      idImg: req.body.idImg,
      img: req.file.filename,
      size: req.file.size,
      tag: req.body.tag
    });

    await newimmagini.save();
    res.json({ message: 'Image uploaded!', immagini: newImmagini });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Endpoint per ottenere tutte le immagini
router.get('/', async (req, res) => {
  try {
    const immagini = await Immagini.find();
    res.send(immagini);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
