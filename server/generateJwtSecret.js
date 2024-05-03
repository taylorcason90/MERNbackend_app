const crypto = require('crypto');

// Function to generate a random hex string of desired length
const generateRandomHexString = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
};

// Generate a 64-character (32-byte) random hex string
const randomHexKey = generateRandomHexString(64);

console.log(randomHexKey); // Print the generated random hex string
