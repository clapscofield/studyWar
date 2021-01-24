const router = require('express').Router();
let Equipe = require('../models/equipe.model');

router.route('/').get((req, res) => {
  Equipe.find()
    .then(eq => res.json(eq))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const idEquipe = req.body.idEquipe;
  const idAlunos = req.body.idAlunos;

  const newEquipe = new Equipe({ 
      idEquipe : idEquipe,
      idAlunos : idAlunos
    });

  newEquipe.save()
    .then(() => res.status(200).json({status:"Equipe criada"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

