const mongoose = require('mongoose');
var db = require('../database.js');

const Schema = mongoose.Schema;

const estudanteSchema = new Schema({
  nome: {type: String},
  dataNascimento: {type: String},
  turma: {type: String},
  matricula: {type: String, unique: true},
  email: {type: String},
  senha: {type: String},
  minutosEstudados: {type: Number},
  idEquipe: {type: String},
  idGuerra: {type: String},
  idInstituicao: {type: String}
}, { collection : 'Estudantes' });

const Estudantes = mongoose.model('Estudantes', estudanteSchema);

module.exports = Estudantes;