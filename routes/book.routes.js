const express = require('express');
const { getBooks, createBook, updateBook, deleteBook, getBook } = require('../controllers/book.controller');
const router = express.Router();

// Get all books
router.get('/books', getBooks);

// Get one book
router.get('/books/:id', getBook);

// Create a book
router.post('/books', createBook);

// Update a book
router.put('/books/:id', updateBook);

// Delete a book
router.delete('/books/:id', deleteBook);

module.exports = router;
