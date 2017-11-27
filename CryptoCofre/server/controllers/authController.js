const mongoose = require("mongoose");
const Password = mongoose.model("Password");
const crypto = require("../services/cryptoService")

const userController = require("./usersController");

const authService = require("../services/authService");

exports.authenticate = async(req, res, next) => {
    try {
        const user = await userController.authenticateUser({
            login: req.body.login,
            password: req.body.password
        });

        if (!user) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await authService.generateToken({
            id: user._id,
            login: user.login,
            name: user.name,
            // roles: user.roles
        });

        res.status(201).send({
            token: token,
            data: {
                id: user._id,
                login: user.login,
                name: user.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: `Falha ao processar sua requisição:  ${e.message}`
        });
    }
};

exports.refreshToken = async(req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        const customer = await repository.getById(data.id);

        if (!customer) {
            res.status(404).send({
                message: 'Cliente não encontrado'
            });
            return;
        }

        const tokenData = await authService.generateToken({
            id: customer._id,
            login: customer.login,
            name: customer.name,
            roles: customer.roles
        });

        res.status(201).send({
            token: token,
            data: {
                login: customer.login,
                name: customer.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
