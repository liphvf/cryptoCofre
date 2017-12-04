const mongoose = require("mongoose");
const Log = mongoose.model("Log");

exports.addLog = async function(message) {
  if (message == undefined || message == null) {
    message = "vazio";
  }

  let log = new Log({
    log: message
  });
  await log.save();
};
