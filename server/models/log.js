const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    log: {
        type: Object,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Log', schema);