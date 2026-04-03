function decodeBase64(encodedText) {
  return Buffer.from(encodedText, "base64").toString("utf-8");
}

const encoded = "Y2FoZmE6YzQxMjFhN2Q2ZDhkNDgxMDQxNjc1ZjA0MGZiNjJkMzQ=";

console.log("Decoded:", decodeBase64(encoded));
