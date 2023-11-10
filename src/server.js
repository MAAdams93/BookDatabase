require("dotenv").config()
require("./db/connection")
const express = require('express')

const app = express () //Establish express library

app.use(express.json())

const port = 5001 //Determines what port server should run on

const Book = require("./books/model")
const bookRouter = require("./books/routes")

app.use(bookRouter)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
}) //Runs server on port 5001