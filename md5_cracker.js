const fs = require("fs");
const crypto = require("crypto");

function md5Hash(text) {
  return crypto.createHash("md5").update(text).digest("hex");
}

function md5Cracker() {
  targetHash = "";

  const lines = fs.readFileSync("candidate-passwords.txt", "utf-8").split("\n");

  for (const line of lines) {
    const word = line.trim();
    const hashedWord = md5Hash(word);

    if (hashedWord === targetHash) {
      console.log("\n Password found:", word);
      return;
    }
  }

  console.log("\n Password not found");
}

md5Cracker();
