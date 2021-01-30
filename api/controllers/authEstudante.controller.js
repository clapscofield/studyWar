const config = require("../config/auth.config");
const Estudante = require('../models/estudante.model');

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signinEstudante = (req, res) => {
  Estudante.findOne({
    matricula: req.body.matricula
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "Matrícula não encontrada" });
      }

      if (req.body.senha !== user.senha) {
        return res.status(401).send({
          accessToken: null,
          message: "Senha inválida!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        matricula: user.matricula,
        turma: user.turma,
        horasEstudadas: user.horasEstudadas,
        equipe: user.idEquipe,
        guerra: user.idGuerra,
        instituicao: user.idInstituicao,
        email: user.email,
        accessToken: token,
        nome: user.nome
      });
    });
};