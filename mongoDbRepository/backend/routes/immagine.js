const express = require('express');
const router = express.Router();
const multer = require('multer');
const Immagine = require('../models/immagine.model'); // Assicurati che il percorso sia corretto

const upload = multer({ dest: 'uploads/' });

// Endpoint per aggiungere un'immagine
router.post('/add', upload.single('file'), async (req, res) => {
  try {
    const newImmagine = new Immagine({
      idImg: req.body.idImg,
      img: req.file.filename,
      size: req.file.size,
      tag: req.body.tag
    });

    await newImmagine.save();
    res.json({ message: 'Image uploaded!', immagine: newImmagine });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Endpoint per ottenere tutte le immagini
router.get('/', async (req, res) => {
  try {
    const immagini = await Immagine.find();
    res.send(immagini);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
