const express = require('express');
const router = express.Router();

const medias = require('./controllers/media.controller');

router.get('/titles', medias.titles);

module.exports = router;
