const Book = require("./model")

const addBook = async (req, res) => {
    const newBook = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    }) 

    const successResponse = {
        message: "Book has been added",
        newBook: newBook
    }
    res.status(201).json(successResponse)
} //Adds a new book to the database

const getBooks = async (req, res) => {
    const getAllBooks = await Book.find({})

    const successResponse = {
        message: "All books found",
        book: getAllBooks
    }
    res.status(201).json(successResponse)
} //Displays all books in the database

const updateBook = async (req, res) => {
    const updateAuthor = await Book.updateOne(
        {title: req.body.title}, 
        {author: req.body.newAuthor}
    )
    const successResponse = {
        message: "Success, book updated",
        book: updateAuthor
    }
    res.status(200).json(successResponse)
} //Updates author of specified book

const deleteBook = async (req, res) => {
    const result = await Book.deleteOne({ title: req.body.title });
    const successResponse = {
      message: "successfully deleted",
    };
    res.status(201).json(successResponse);
  }; //Deletes a book from the database

const findBook = async (req, res) => {
    let bookTitle = req.params['title']
    
    const findBook = await Book.findOne({title: bookTitle})

    const successResponse = {
        message: "Success Response",
        book: findBook
    }

    res.status(200).json(successResponse)
} //Finds a book in the database based on title

const addManyBooks = async (req, res) => {
    const newBooks = await Book.insertMany([
        {
            title: req.body.title1,
            author: req.body.author1,
            genre: req.body.genre1
        },
        {
            title: req.body.title2,
            author: req.body.author2,
            genre: req.body.genre2
        }
    ])
    const successResponse = {
        message: "success, book has been added",
        newBook: newBooks
    }
    res.status(201).json(successResponse)
} //Add two books to the database at the same time

// Create a route to dynamically update any feild on the databse
const updateAll = async (req, res) => {
    const updateAuthor = await Book.updateOne(
        {title: req.body.title}, 
        {[req.body.updateKey]: req.body.updateValue}
    )
    const successResponse = {
        message: "Success, book updated",
        book: updateAuthor
    }
    res.status(200).json(successResponse)
} //Updates all fields in a database simultaneously

module.exports = {
    addBook,
    getBooks,
    updateBook,
    deleteBook,
    findBook,
    addManyBooks,
    updateAll
}