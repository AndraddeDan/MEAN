/* Descrição: Arquivo responsável pela intermediação de GET do 'Plano' */
const plano = require('../models/plano.model');

exports.findAll = (req, res) => {
  plano.find()
    .then((planos) => res.status(200).send(planos))
    .catch((err) => res.status(500).send({ mensagem: 'Erro ao selecionar os planos' || err.menssage }));
};
