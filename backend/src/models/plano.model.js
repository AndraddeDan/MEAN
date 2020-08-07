/* Descrição: arquivo responsável pelo modelo da classe 'Plano' da aplicação */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planoSchema = new Schema({
  planoNome: { type: String, required: true },
  minutosGratis: { type: Number, required: true }
}, {
  collection: 'plano'
});

module.exports = mongoose.model('plano', planoSchema);
