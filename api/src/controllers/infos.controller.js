/* Descrição: Arquivo responsável pela intermediação de GET do 'Plano' */
const planos = require('../models/plano.model');
const precos = require('../models/preco.model');
const ddds = require('../models/ddd.model');

exports.find = (req, res) => {
  Promise.all([ddds.find(), planos.find(), precos.find()])
    .then((values) => {
      const names = ['ddds', 'planos', 'precos'];
      let infos = {};

      values.forEach((item, i) => infos[names[i]] = item);
      res.status(200).send(infos);
    })
    .catch((err) => res.status(500)
      .send({ mensagem: 'Erro ao selecionar as informações' || err.menssage }));
};
