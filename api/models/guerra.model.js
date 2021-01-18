const mongoose = require('mongoose');
var db = require('../database.js');

const Schema = mongoose.Schema;

const guerraSchema = new Schema({
  idInstituicao: {type: String},
  dataInicio: { type: String },
  dataFim: { type: String },
  identificador: { type: String, unique: true, 
    minlength: 3},
  numeroTotalEquipes: { type: String },
  numeroAlunosPorEquipe: {type: String }
}, { collection : 'Guerras' });

const GuerraEstudos = mongoose.model('Guerras', guerraSchema);

module.exports = GuerraEstudos;