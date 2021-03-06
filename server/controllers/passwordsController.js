const mongoose = require("mongoose");
const Password = mongoose.model("Password");
const crypto = require("../services/cryptoService");
const userController = require("./usersController");
const authSevice = require("../services/authService");
const logService = require("../services/logService");

exports.get = async (req, res, next) => {
  try {
    let token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    let tokenData = await authSevice.decodeToken(token);

    const result = await Password.find({ user: tokenData.id });

    let user = await userController.getByIdInternal(tokenData.id);

    result.forEach(i => {
      i.password = crypto.decrypt(i.password, user.password);
    });

    logService.addLog({
      user: user,
      message: "get da lista de  passwords"
    });
    res.send(result);
  } catch (error) {
    logService.addLog(error);
    res.status(500).send({ message: error.message });
  }
};

exports.post = async (req, res, next) => {
  try {
    let token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    let tokenData = await authSevice.decodeToken(token);

    let user = await userController.getByIdInternal(tokenData.id);

    let pwd = new Password(req.body);
    pwd.user = tokenData.id;
    pwd.password = crypto.encrypt(pwd.password, user.password);
    await pwd.save();

    logService.addLog({
      user: user,
      message: "Post de password"
    });
    res.status(201).send({
      mensage: `Password cadastrado!`
    });
  } catch (e) {
    logService.addLog(e);
    res.status(500).send({
      message: e.message
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    let token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    let tokenData = await authSevice.decodeToken(token);

    let user = await userController.getByIdInternal(tokenData.id);

    let id = {
      _id: req.params.id
    };

    if (id == undefined || id == null) {
      res.status(404).send({
        message: "Id não encontrado"
      });
    }

    logService.addLog({
      user: user,
      message: "Delete de password"
    });
    await Password.findOneAndRemove(id);

    res.status(200).send({
      mensage: `Password Deletado!`
    });
  } catch (e) {
    logService.addLog(e);
    res.status(500).send({
      message: e.message
    });
  }
  next();
};
