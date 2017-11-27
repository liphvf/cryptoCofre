const crypto = require("crypto");
const algorithm = "aes-128-ecb";

exports.getHash = (text) => {
  return crypto
    .createHash("sha256")
    .update(text)
    .digest("base64");
};

exports.encrypt = (text, password) => {
  let cipher = crypto.createCipher(algorithm, password);
  let crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
};

exports.decrypt = (text, password) => {
  let decipher = crypto.createDecipher(algorithm, password);
  let dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
};
