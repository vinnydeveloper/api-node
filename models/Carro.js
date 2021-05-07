const mongoose = require("mongoose");

const Carro = new mongoose.Schema({
  nome: { type: String },
  marca: { type: String },
  ano: { type: Number },
});

module.exports = mongoose.model("Carro", Carro);
