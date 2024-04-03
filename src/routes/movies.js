const express = require('express');
const router = express.Router();


const moviesController = require('../controllers/moviesController');


router


.get('/update/:id', moviesController.detail)
.get('/add', moviesController.addMovie)


module.exports = router;