/* Descrição: arquivo responsável pelas rotas da api relacionada ao 'DDD' */
const express = require('express');

const router = express.Router();
const infosController = require('../controllers/infos.controller');

router.get('/', infosController.find); // RETORNA TODOS AS INFOS

module.exports = router;
