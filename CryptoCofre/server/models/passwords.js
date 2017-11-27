const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    userId: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});


module.exports = mongoose.model('Password', schema);