const express = require('express');
const router = express.Router();


const indexController = require('../controllers/indexController');


router


.get('/', indexController.home)
.get('/favoriteMovies', indexController.favoriteMovies)


module.exports = router;