/* Descrição: arquivo responsável pelo modelo da classe 'Plano' da aplicação */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const planoSchema = new Schema({
  origem: { type: Number, required: true, max: 999 },
  destino: { type: Number, required: true, max: 999 },
  planoNome: { type: String, required: true },
  minutosGratis: { type: Number, required: true }
}, {
  collection: 'plano'
});

const plano = mongoose.model('plano', planoSchema);

module.exports = plano;