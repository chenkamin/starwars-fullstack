const express = require('express');
const { getFilms,getFilm } = require('../controllers/filmsContoller');

const router = express.Router();

router.get('/', getFilms)
router.get('/:id', getFilm)


module.exports = router;
