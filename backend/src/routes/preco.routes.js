/* Descrição: arquivo responsável pelas rotas da api relacionada ao 'Preço' */
const express = require('express');

const router = express.Router();
const precoController = require('../controllers/preco.controller');

router.get('/', precoController.findAll); // RETORNA TODOS OS PREÇOS

module.exports = router;
