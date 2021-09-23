// # 1
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// # 2
var BookSchema = Schema({
  id: Number,
  title: String,
  autor: {
    type: String,
    default: "N/F",
  },
  sinopsis: {
    type: String,
    default: "N/F",
  },
  saga: {
    type: String,
    default: "N/F",
  },
  volumen: {
    type: Number,
    default: "N/F",
  },
  categoria: {
    type: String,
    default: "N/F",
  },
  fecha: {
    type: Number,
    default: "N/F",
  },
  imagen: {
    type: String,
    default: "N/F",
  },
  editorial: {
    type: String,
    default: "N/F",
  },
});

// # 3
module.exports = mongoose.model("book", BookSchema);
