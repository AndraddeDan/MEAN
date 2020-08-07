/* Descrição: Arquivo responsável pela intermediação de GET do 'Plano' */
const planos = require('../models/plano.model');
const precos = require('../models/preco.model');
const ddds = require('../models/ddd.model');

exports.find = (req, res) => {
  return Promise.all([ddds.find(), planos.find(), precos.find()])
    .then(([ddds, planos, precos]) => {
      res.status(200).send({ddds, planos, precos});
    })
    .catch((err) => res.status(500)
      .send({ mensagem: err.message || 'Erro ao selecionar as informações' }));
};
