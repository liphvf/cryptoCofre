const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
const User = mongoose.model("User");

// exports.get = (req, res, next) => {
//     res.status(201).send(req.body);
// };

exports.get = async (req, res, next) => {
  const result = User.find({}, function(err, users) {
    var userList = {};

    users.forEach(function(user) {
      userList[user._id] = user;
    });
    
    res.send(userList);
  });
  // res.status(200).send(result);
  // return result;
  // try {
  //   var test = user.find({});
  //   res.status(200).send(test);
  // } catch (e) {
  //   res.status(500).send({
  //     message: "Falha ao processar sua requisição"
  //   });
  // }
};

exports.post = async (req, res, next) => {
  try {
    let user = new User(req.body);
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

// exports.post = (req, res, next) => {
//     let user = new User(req.body);
//     user.save().then(e => {
//         res.status(201).send({
//             mensage: 'Usuário cadastrado!'
//         }).catch( err => {
//             res.status(400).send({error: err})
//         });
//     })
// };

// exports.put = (req, res, next) => {
//     res.status(200).send(req.body);
// };

// exports.delete = (req, res, next) => {
//     res.status(200).send(req.body);
// };
