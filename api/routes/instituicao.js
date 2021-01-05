const router = require('express').Router();
let Instituicao = require('../models/instituicao.model');

router.route('/').get((req, res) => {
  Instituicao.find()
    .then(instituicao => res.json(instituicao))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const usuario = req.body.usuario;
  const descricao = req.body.descricao;
  const nome = req.body.nome;
  const senha = req.body.senha;
  const email = req.body.email;

  const newInstituicao = new Instituicao({nome, descricao, usuario, senha, email});

  newInstituicao.save()
    .then(() => res.json('Instituição cadastrada!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;