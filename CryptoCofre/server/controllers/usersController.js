const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');

exports.get = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.post = (req, res, next) => {
    let user = new User(req.body);
    user.save().then(e => {
        res.status(201).send({
            mensage: 'Usuário cadastrado!'
        }).catch( err => {
            res.status(400).send({error: err})
        });
    })
};


exports.put = (req, res, next) => {
    res.status(200).send(req.body);
};


exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
