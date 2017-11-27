const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
const User = mongoose.model("User");
const crypto = require("../services/cryptoService");

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

exports.authenticateUser = async (data) => {
  try {
    let result = await User.findOne({
      login: data.login,
      password: crypto.getHash(data.password)
    });

    return result;
    
  } catch (e) {
    throw new Error('Usuário ou senha incorreta');
  }
};

exports.post = async (req, res, next) => {
  try {
    let user = new User(req.body);
    user.password = crypto.getHash(user.password);
    await user.save();
    res.status(201).send({
      mensage: `Usuário cadastrado! Por favor, salve seu token: ${user.token}`,
      token: user.token
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
