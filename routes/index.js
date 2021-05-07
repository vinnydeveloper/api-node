const express = require("express");
const carroController = require("../controllers/carroController.js");
const router = express.Router();
//rotas
router.post("/carro", carroController.criar);

module.exports = router;
