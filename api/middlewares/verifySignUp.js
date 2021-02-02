const db = require("../models");
const Instituicao = db.instituicao;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  Instituicao.findOne({
    usuario: req.body.usuario
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Usuário já está em uso" });
      return;
    }

    // Email
    Instituicao.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Email já está em uso" });
        return;
      }
      
      next();
    });
  });
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail
};
  
module.exports = verifySignUp;