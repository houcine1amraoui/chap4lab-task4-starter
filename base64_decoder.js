function decodeBase64(encodedText) {
  return Buffer.from(encodedText, "base64").toString("utf-8");
}

const encoded = "";

console.log("Decoded:", decodeBase64(encoded));
