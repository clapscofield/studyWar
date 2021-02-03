const mongoose = require('mongoose');
var db = require('../database.js');

const Schema = mongoose.Schema;

const instituicaoSchema = new Schema({
  nome: { type: String },
  descricao: { type: String },
  usuario: { type: String, unique: true, 
    minlength: 3},
  senha: { type: String },
  email: {type: String }
}, {
  timestamps: true,
}, { collection : 'Instituicoes' });

const Instituicao = mongoose.model('Instituicoes', instituicaoSchema);

module.exports = Instituicao;