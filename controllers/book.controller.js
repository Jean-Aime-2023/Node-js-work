const Book = require('../models/book.model')
const _ = require('lodash')

const getBooks = async (req, res) => {
    try {
        let books = await Book.find()
        res.json(books)
    } catch (err) {
        res.status(500).json({ message: 'An error occurred...' })
    }
}

const getBook = async (req, res) => {
    try {
        let id = req.params.id
        let book = await Book.findById(id)
        if (book) {
            res.json(book)
        } else {
            res.status(404).json({ message: 'Not Found' })
        }
    } catch (err) {
        res.status(500).json({ message: 'An error occurred...' })
    }
}

const createBook = async (req, res) => {
    try {
        const book = new Book(_.pick(req.body, ['name', 'author', 'publishDate']))
        await book.save()
        res.status(201).send(book)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const updateBook = async (req, res) => {
    try {
        let id = req.params.id
        let updatedBook = await Book.findByIdAndUpdate(id, {
            name: req.body.name,
            author: req.body.author,
            publishDate: req.body.publishDate
        }, { new: true })

        if (updatedBook) {
            res.json(updatedBook)
        } else {
            res.status(404).json({ message: 'Not Found' })
        }
    } catch (err) {
        res.status(500).json({ message: 'An error occurred...' })
    }
}

const deleteBook = async (req, res) => {
    try {
        let id = req.params.id;
        let deletedBook = await Book.findByIdAndRemove(id)
        if (deletedBook) {
            res.json({ message: 'Book deleted...' })
        } else {
            res.status(404).json({ message: 'Not Found' })
        }
    } catch (err) {
        res.status(500).json({ message: 'An error occurred...' })
    }
}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
    getBook
}
