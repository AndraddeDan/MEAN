/* Descrição: Arquivo responsável pela intermediação de GET do 'Plano' */
const preco = require('../models/preco.model');

exports.findAll = (req, res) => {
  preco.find()
    .then((precos) => res.status(200).send(precos))
    .catch((err) => res.status(500).send({ mensagem: 'Erro ao selecionar os preços' || err.menssage }));
};
