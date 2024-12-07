// src/controllers/bookController.js

const Book = require('../models/bookModel'); // assuming you have a book model

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving books", error: err });
    }
};

// Create a new book
exports.createBook = async (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear,
    });

    try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(500).json({ message: "Error creating book", error: err });
    }
};

// Get a specific book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving book", error: err });
    }
};

