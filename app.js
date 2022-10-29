const express = require("express");
const books = require("./books.js");
const app = express();
const upload = require("express-fileupload");

app.use(express.json());
app.use(upload());

app.listen(3000, () => {
  console.log("Server start at port:3000");
});

/*--------------------- CRUD Processes -----------------*/

/*------------ Upload a book file and add it to books array-------------- */
app.post("/uploadBook", (req, res) => {
  if (req.files) {
    const file = req.files.file;
    file.mv("./UploadedFiles/" + file.name, (err, result) => {
      if (err) {
        throw err;
      } else {
        books.push({id:"15" ,
            title: file.name,
        author: "someone"});
        res.send({ msg: "book added successfully", books: books });
      }
    });
  } else {
    console.log("something went wrong when upload a file!");
  }
});
/*------- Get all books ----------- */
app.get("/getAll", (req, res) => {
  res.send(books);
});

/*------- Get  book by id ----------- */
app.get("/getBook/:id", (req, res) => {
  const { id } = req.params;
  const foundBook = books.find((item) => item.id === id);
  res.json(foundBook);
});

/*-------- Add new Book-------*/
app.post("/addBook", (req, res) => {
  const book = req.body;
  books.push(book);
  res.send({ msg: "book added successfully", books: books });
});

/*--------- udpate a book ---------*/
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((item) => item.id === id);
  const { title, author, price } = req.body;

  if (title) {
    book.title = title;
  }
  if (author) {
    book.author = author;
  }
  if (price) {
    book.price = price;
  }

  res.send(books);
});

/*--------- delete a book ---------*/
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const newBooks = books.filter((item) => item.id != id);
  res.send(newBooks);
});
