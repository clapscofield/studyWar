const mongoose = require('mongoose');
var db = require('../database.js');

const Schema = mongoose.Schema;

const equipeSchema = new Schema({
  idEquipe: {type: String},
  idAlunos: {type: [String]},
  usuarioInstituicao: {type: String},
  idGuerra: {type: String}
}, { collection : 'Equipes' });

const Equipes = mongoose.model('Equipes', equipeSchema);

module.exports = Equipes;