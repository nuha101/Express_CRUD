const express = require("express");
const upload = require("express-fileupload");
const booksRoutes = require("./routes/bookRoutes");
const books = require('./books');

const app = express();
app.use(express.json());

/*--------- Books Routes ---------*/
app.use(booksRoutes);

/*---------- File Upload -------*/
app.use(upload());
app.post("/uploadBook", (req, res) => {
  if (req.files) {
    const file = req.files.file;
    file.mv("./UploadedFiles/" + file.name, (err, result) => {
      if (err) {
        throw err;
      } else {
        books.push({ id: "15", title: file.name, author: "someone" });
        res.send({ msg: "book added successfully", books: books });
      }
    });
  } else {
    console.log("something went wrong when upload a file!");
  }
});

/*------------ Setup Server ----------*/
app.listen(3000, () => {
  console.log("Server start at port:3000");
});
