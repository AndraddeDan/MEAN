/* Descrição: arquivo responsável pelo modelo da classe 'Plano' da aplicação */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dddSchema = new Schema({
  ddd: { type: String, required: true },
}, {
  collection: 'ddd'
});

module.exports = mongoose.model('ddd', dddSchema);
