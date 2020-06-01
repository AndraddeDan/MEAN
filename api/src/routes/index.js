/* Descrição: Arquivo responsável pela chamada da API */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.jsonp({ message: 'Work' });
})

module.exports = router;
