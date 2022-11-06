const books = require("../books");


module.exports = {

    // uploadBook : (req, res) => {
    //     if (req.files) {
    //       const file = req.files.file;
    //       file.mv("./UploadedFiles/" + file.name, (err, result) => {
    //         if (err) {
    //           throw err;
    //         } else {
    //           books.push({ id: "15", title: file.name, author: "someone" });
    //           res.send({ msg: "book added successfully", books: books });
    //         }
    //       });
    //     } else {
    //       console.log("something went wrong when upload a file!");
    //     }
    //   },

    getAllBooks : (req, res) => {
        res.send(books);
      },
    
    getBookById: (req, res) => {
        const { id } = req.params;
        const foundBook = books.find((item) => item.id === id);
        res.json(foundBook);
      },
    
    addBook:  (req, res) => {
        const book = req.body;
        books.push(book);
        res.send({ msg: "book added successfully", books: books });
      },

    updateBook: (req, res) => {
        const { id } = req.params;
        const book = books.find((item) => item.id === id);
        const { title, author, price } = req.body;
      
        if (title) {
          book.title = title;
        }
        if (price) {
          book.price = price;
        }
      
        res.send(books);
      },
    
    deleteBook:  (req, res) => {
        const { id } = req.params;
        const newBooks = books.filter((item) => item.id != id);
        res.send(newBooks);
      }
}