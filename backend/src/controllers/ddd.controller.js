/* Descrição: Arquivo responsável pela intermediação de GET do 'Plano' */
const ddd = require('../models/ddd.model');

exports.findAll = (req, res) => {
  return ddd.find()
    .then((ddds) => res.status(200).send(ddds))
    .catch((err) => res.status(500).send({ mensagem: err.message || 'Erro ao selecionar os planos' || err.menssage }));
};
