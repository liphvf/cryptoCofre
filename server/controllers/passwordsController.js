const mongoose = require("mongoose");
const Password = mongoose.model("Password");
const crypto = require("../services/cryptoService")
const userController = require("./usersController");
const authSevice = require("../services/authService");

exports.get = async (req, res, next) => {
    try {
        let token = req.body.token || req.query.token || req.headers['x-access-token'];
        
        let tokenData = await authSevice.decodeToken(token);
        
        const result = await Password.find({user: tokenData.id});
    
        let user = await userController.getByIdInternal(tokenData.id);

        result.forEach(i => {
                 i.password = crypto.decrypt(i.password, user.password)
                });

        res.send(result);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
};

exports.post = async (req, res, next) => {
    try {
        let token = req.body.token || req.query.token || req.headers['x-access-token'];

        let tokenData = await authSevice.decodeToken(token);

        let user = await userController.getByIdInternal(tokenData.id);

        let pwd = new Password(req.body);
        pwd.user = tokenData.id;
        pwd.password = crypto.encrypt(pwd.password, user.password);
        await pwd.save();

        res.status(201).send({
          mensage: `Password cadastrado!`,
        });
      } catch (e) {
        res.status(500).send({
          message: e.message
        });
      }
};


exports.delete = async (req, res, next) => {
    // try {
    //     let token = req.body.token || req.query.token || req.headers['x-access-token'];
        
    //     let tokenData = await authSevice.decodeToken(token);

    //     let user = await userController.getByIdInternal(tokenData.id);

    //     let pwd = new Password(req.body);
    //     pwd.user = tokenData.id;
    //     pwd.password = crypto.encrypt(pwd.password, user.password);
    //     await pwd.save();

    //     res.status(201).send({
    //       mensage: `Password cadastrado!`,
    //     });
    //   } catch (e) {
    //     res.status(500).send({
    //       message: e.message
    //     });
    //   }
    next();
};