/* Descrição: Arquivo responsável pela intermediação de GET do 'Plano' */
const ddd = require('../models/ddd.model');

exports.findAll = (req, res) => {
  ddd.find()
    .then((ddds) => res.status(200).send(ddds))
    .catch((err) => res.status(500).send({ mensagem: 'Erro ao selecionar os planos' || err.menssage }));
};
