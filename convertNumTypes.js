import fs from 'fs'

// Helper function to check if a value is numeric
function isNumeric(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}

// Function to convert numeric strings to numbers
function convertStringsToNumbers(jsonObj) {
  for (let key in jsonObj) {
    if (typeof jsonObj[key] === 'string' && isNumeric(jsonObj[key])) {
      // Convert numeric strings to numbers
      jsonObj[key] = parseFloat(jsonObj[key]);
    } else if (typeof jsonObj[key] === 'object' && jsonObj[key] !== null) {
      // Recursively handle nested objects or arrays
      convertStringsToNumbers(jsonObj[key]);
    }
  }
}

// Step 1: Read the original JSON file
const jsonString = fs.readFileSync('./textFiles/creditScoreList.json', 'utf-8');
let jsonData = JSON.parse(jsonString);

// Step 2: Convert string numbers to actual numbers
convertStringsToNumbers(jsonData);

// Step 3: Write the updated JSON back to a file
fs.writeFileSync('./textFiles/creditScoreList.json', JSON.stringify(jsonData, null, 2));

console.log('Converted JSON saved to output.json');
