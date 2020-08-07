/* Descrição: arquivo responsável pelas rotas da api relacionada ao 'DDD' */
const express = require('express');

const router = express.Router();
const dddController = require('../controllers/ddd.controller');

router.get('/', dddController.findAll); // RETORNA TODOS OS DDD's

module.exports = router;
