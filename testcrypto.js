// var AES = require('aes')

// var aes = new AES("senha de xuxu");

// let xuxuEncrypt = aes.encrypt(xuxu);
// let xuxuDecrypt = aes.decrypt(xuxuEncrypt);

// console.log(xuxuEncrypt);
// console.log(xuxuDecrypt);

// const crypto = require('crypto');

// const secret = 'abcdefg';
// const hash = crypto.createHmac('aes128', secret)
//                    .update('I love cupcakes')
//                    .digest('hex');

// let text = crypto.create
// console.log(hash);

"use strict";
const crypto = require("crypto");

// get password's md5 hash
// let password = 'test';
// let password_hash = crypto.createHash('md5').update(password, 'utf-8').digest('hex').toUpperCase();
// console.log('key=', password_hash); // 098F6BCD4621D373CADE4E832627B4F6

// // our data to encrypt
// let data = '06401;0001001;04;15650.05;03';
// console.log('data=', data);

// // generate initialization vector
// let iv = new Buffer.alloc(16); // fill with zeros
// console.log('iv=', iv);

// // encrypt data
// let cipher = crypto.createCipheriv('aes-256-cbc', password_hash, iv);
// let encryptedData = cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
// console.log('encrypted data=', encryptedData.toUpperCase());

// let cipher = crypto.createCipheriv('aes-256-cbc', password_hash, iv);

// let xuxu = crypto.createDecipher('aes192', "xuxu");
// console.log(xuxu);

// // Criação de hash
// var hash = crypto
//   .createHash("sha256")
//   .update("XUXU")
//   .digest("base64");

// console.log(hash);

// var crypto = require('crypto'),
var algorithm = "aes-128-ecb";
var password = "xuxu";

function encrypt(text) {
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}

function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}

var hw = encrypt("xuxu");
console.log(hw);
// outputs hello world
console.log(decrypt(hw));
