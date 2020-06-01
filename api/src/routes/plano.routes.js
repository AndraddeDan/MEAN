/* Descrição: arquivo responsável pelas rotas da api relacionada ao 'Plano' */

const express = require('express');

const router = express.Router();
const planoController = require('../controllers/plano.controller');

router.get('/planos', planoController.get); // Retorna todos os planos
router.get('/plano/:planoNome', controller.getByPlanoNome); // Retorna o plano pelo nome

module.exports = router;