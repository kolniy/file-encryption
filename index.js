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

encryptData();
