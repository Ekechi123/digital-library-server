const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Create a book
router.post('/', bookController.createBook);

// Get all books
router.get('/', bookController.getAllBooks);

module.exports = router;

