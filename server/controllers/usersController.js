const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
const User = mongoose.model("User");
const crypto = require("../services/cryptoService");
const logService = require("../services/logService");

exports.get = async (req, res, next) => {
  try {
    let result = await User.find({});

    res.send(result);
    
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.getByIdInternal = async (id) => {
    let result = await User.findById(id);

    return result;
};

exports.authenticateUser = async (data) => {
  try {
    let result = await User.findOne({
      login: data.login,
      password: crypto.getHash(data.password)
    });
    logService.addLog({
      user: result,
      message: "Autenticado"
    })
    return result;
    
  } catch (e) {
    logService.addLog(e);
    throw new Error('Usuário ou senha incorreta');
  }
};

exports.post = async (req, res, next) => {
  try {
    let user = new User(req.body);
    user.password = crypto.getHash(user.password);
    await user.save();

    logService.addLog({
      user: user,
      message: "usuário cadastrado"
    });
    res.status(201).send({
      mensage: `Usuário cadastrado! Por favor, salve seu token: ${user.secondPass}`,
      token: user.secondPass
    });
  } catch (e) {
    logService.addLog(e);    
    res.status(500).send({
      message: e.message
    });
  }
};
