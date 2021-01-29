const router = require('express').Router();
let Estudante = require('../models/estudante.model');

router.route('/').get((req, res) => {
  Estudante.find()
    .then(eq => res.json(eq))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nome = req.body.nome;
    const dataNascimento = req.body.dataNascimento;
    const turma = req.body.turma;
    const matricula = req.body.matricula;
    const email = req.body.email;
    const senha = req.body.senha;
    const horasEstudadas = req.body.horasEstudadas;
    const idEquipe = req.body.idEquipe;
    const idGuerra = req.body.idGuerra;
    const idInstituicao = req.body.idInstituicao;

  const newEstudante = new Estudante({ 
      nome: nome,
      dataNascimento: dataNascimento,
      turma: turma,
      matricula: matricula,
      email: email,
      senha: senha,
      horasEstudadas: horasEstudadas,
      idEquipe: idEquipe,
      idGuerra: idGuerra,
      idInstituicao: idInstituicao
    });

  newEstudante.save()
    .then(() => res.status(200).json({status:"Estudante criada"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

