/* Descrição: arquivo responsável pelas rotas da api relacionada ao 'Plano' */
const express = require('express');

const router = express.Router();
const planoController = require('../controllers/plano.controller');

router.get('/', planoController.findAll); // RETORNA TODOS OS PLANOS

module.exports = router;
