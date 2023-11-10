const {Router} = require("express")

const bookRouter = Router()

const {addBook, getBooks, updateBook, deleteBook, findBook, addManyBooks, updateAll} = require("./controllers")
 
bookRouter.post("/addBook", addBook)
bookRouter.get("/getBooks", getBooks)
bookRouter.put("/updateBook", updateBook)
bookRouter.delete("/deleteBook", deleteBook)
bookRouter.get("/findBook", findBook)
bookRouter.post("/addManyBooks", addManyBooks)
bookRouter.put("/updateAll", updateAll)

module.exports = bookRouter