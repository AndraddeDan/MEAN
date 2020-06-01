/* Descrição: arquivo responsável pelo modelo da classe 'Preço' da aplicação */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const precoSchema = new Schema({
    origem: { type: String, required: true },
    destino: { type: String, required: true },
    valorMinuto: { type: Number, required: true }
}, {
    collection: 'preco'
});

module.exports = mongoose.model('preco', precoSchema);
