const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
const User = mongoose.model("User");
const crypto = require("../services/cryptoService");

exports.get = async (req, res, next) => {
  const result = User.find({}, function(err, users) {
    var userList = {};

    users.forEach(function(user) {
      userList[user._id] = user;
    });

    res.send(userList);
  });
};

exports.post = async (req, res, next) => {
  try {
    let user = new User(req.body);
    user.password = crypto.getHash(user.password);
    user.save();
    res.status(201).send({
      mensage: "Usuário cadastrado!"
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
