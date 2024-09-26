import fs from 'fs'
import diff from 'deep-diff'

// Read and parse two JSON files
const json1 = JSON.parse(fs.readFileSync('./textFiles/creditScoreList.json', 'utf-8'));
const json2 = JSON.parse(fs.readFileSync('./textFiles/compare.json', 'utf-8'));

// Compare the two JSON objects and get differences
const differences = diff(json1, json2);

if (!differences) {
  console.log('The two JSON files are identical.');
} else {
  console.log('Differences found between the two JSON files:');
  console.log(differences);
}