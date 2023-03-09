const Router = require('express');
const genreController = require('../controller/genre.controller');
const filmController = require('../controller/film.controller');

const router = new Router();

router.post('/film', filmController.addFilm);
router.get('/films', filmController.getFilms);
router.get('/film/:id', filmController.getFilm);
router.put('/film', filmController.updateFilm);
router.delete('/film/:id', filmController.deleteFilm);

module.exports = router;