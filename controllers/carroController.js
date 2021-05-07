const mongoose = require("mongoose");

const Carro = require("../models/Carro");

const carroController = {
  criar: async (req, res) => {
    const { nome, marca, ano } = req.body;

    const novoCarro = await Carro.create({ nome, marca, ano });

    return res.json(novoCarro);
  },
};

module.exports = carroController;
