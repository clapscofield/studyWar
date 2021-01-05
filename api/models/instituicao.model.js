const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instituicaoSchema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  usuario: { type: String, required: true, unique: true, 
    minlength: 3},
  senha: { type: String, required: true },
  email: {type: String, required: true}
}, {
  timestamps: true,
});

const Instituicao = mongoose.model('Instituicao', instituicaoSchema);

module.exports = Instituicao;