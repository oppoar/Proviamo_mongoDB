const router = require('express').Router();
const multer = require('multer');
const sharp = require('sharp');
const Image = require('../models/image.model');
const path = require('path');
const fs = require('fs');

// Setup Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// POST /images/add
router.post('/add', upload.single('image'), async (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded.');

    try {
        const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

        // Leggi dimensioni con sharp
        const metadata = await sharp(filePath).metadata();

        const newImage = new Image({
            path: req.file.filename,
            size: req.file.size,            // peso del file in byte
            width: metadata.width,
            height: metadata.height,
        });

        await newImage.save();
        res.json({ message: 'Image uploaded!', image: newImage });
    } catch (err) {
        res.status(500).json({ error: 'Errore nel salvataggio immagine', details: err });
    }
});

// 📤 GET /images
router.get('/', (req, res) => {
    Image.find()
        .then(images => res.json(images))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;