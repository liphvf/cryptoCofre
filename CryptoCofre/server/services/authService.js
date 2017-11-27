'use strict';
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    // return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
    // TODO: Mudar para global.SalT para terminar
    return jwt.sign(data, "xuxu", { expiresIn: '1d' });    
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, "xuxu");
    return data;
}

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        // TODO: Trocar depois para global
        // jwt.verify(token, global.SALT_KEY, function (error, decoded) {            
        jwt.verify(token, "xuxu", function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                next();
            }
        });
    }
};

exports.isAdmin = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Token Inválido'
        });
    } else {
        jwt.verify(token, "xuxu", function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                if (decoded.roles.includes('admin')) {
                    next();
                } else {
                    res.status(403).json({
                        message: 'Esta funcionalidade é restrita para administradores'
                    });
                }
            }
        });
    }
};