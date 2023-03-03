const fs = require("fs");
const crypto = require("crypto");

const algorithm = "aes-256-cbc";

const initVector = crypto.randomBytes(16);
const securityKey = crypto.randomBytes(32);

const encryptData = () => {
  const readStream = fs.readFileSync("./file.txt");

  const message = readStream.toString("utf-8");

  const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);

  let encryptedData = cipher.update(message, "utf-8", "hex");

  encryptedData += cipher.final("hex");

  fs.writeFileSync("./encryptedData.txt", encryptedData);
  console.log("Encrypted message: " + encryptedData);
};

const decryptData = () => {
  // the decipher function
  const fileContentToBeDecrypted = fs.readFileSync("./encryptedData.txt");
  const messageToBeDecrpted = fileContentToBeDecrypted.toString();

  const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);

  let decryptedData = decipher.update(messageToBeDecrpted, "hex", "utf-8");

  decryptedData += decipher.final("utf8");

  console.log("Decrypted message: " + decryptedData);
};

encryptData();
decryptData();
