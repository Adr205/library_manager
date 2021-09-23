const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./config");
const Book = require("./Model/Biblioteca");
const Biblioteca = require("./Model/Biblioteca");
const PORT = config.app.port;
const app = express();

// connection to Mongo db
mongoose
  .connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((db) => console.log("db connected"))
  .catch((err) => console.log(err));

// settings

app.engine("html", require("ejs").renderFile);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

// middlewares
app.use(morgan("dev"));

// variables globales
// middleware para mensajes

// routes

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get('/Books', async (req,res) =>{
    var books = await Book.find({});
    console.log(books)
    res.end(JSON.stringify(books));
});

app.post("/add", async (req, res) => {
  var book = new Biblioteca(req.body);

  await book.save();
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
