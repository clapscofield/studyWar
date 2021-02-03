const router = require('express').Router();
let Equipe = require('../models/equipe.model');

router.route('/').get((req, res) => {
  Equipe.find()
    .then(eq => res.json(eq))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-equipe').post((req, res) => {
  const idEquipe = req.body.idEquipe;
  const usuarioInstituicao = req.body.usuarioInstituicao;
  const idGuerra = req.body.idGuerra;

  const newEquipe = new Equipe({ 
      idEquipe : idEquipe,
      idAlunos : [],
      usuarioInstituicao: usuarioInstituicao,
      idGuerra: idGuerra
    });

  newEquipe.save()
    .then(() => res.status(200).json({status:"Equipe criada"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-aluno').post((req, res) => {
  const idEquipe = req.body.idEquipe;

  const novoAluno = req.body.idAluno;

  Equipe.findOneAndUpdate(
    { idEquipe: idEquipe }, 
    { $push: { idAlunos: novoAluno  } },
    function (error, success) {
         if (error) {
             console.log(error);
         } else {
             console.log(success);
         }
  });

});

module.exports = router;

