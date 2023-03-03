const fs = require("fs");

const readStream = fs.createReadStream("./file.txt");
const writeStream = fs.createWriteStream("./newfile.txt");

readStream.pipe(writeStream);
