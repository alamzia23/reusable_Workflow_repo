// --- Basic example ---
console.log("Hello from your Node.js script!");
console.log("This is a simple demonstration of script execution within a workflow.");

// --- More functional example ---
const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8');
const wordCount = data.split(/\s+/).length;

console.log(`The word count in 'data.txt' is: ${wordCount}`);

// --- Customize this script with your specific tasks ---
// - Perform calculations
// - Process data
// - Generate reports
// - Trigger other actions
