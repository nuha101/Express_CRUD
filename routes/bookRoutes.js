const express = require("express");
const router = express.Router();
const controller = require("../controllers/booksController");

/*-------------------------------------- CRUD Processes -----------------------------------*/

/*------------ Upload and add a book file -------------- */
// router.post("/uploadBook", controller.uploadBook);

/*------- Get books ----------- */
router.get("/getAll", controller.getAllBooks);

/*------- Get  book by id ----------- */
router.get("/getBook/:id", controller.getBookById);

/*-------- Add book-------*/
router.post("/addBook", controller.addBook);

/*--------- udpate a book ---------*/
router.put("/update/:id", controller.updateBook);

/*--------- delete a book ---------*/
router.delete("/delete/:id", controller.deleteBook);

module.exports = router;