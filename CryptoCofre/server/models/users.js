"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guid = require("guid");


const schema = new Schema({
  login: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  token: {
    type: String,
    required: true,
    trim: true,
    default: guid.raw()
  }
});

module.exports = mongoose.model("User", schema);
