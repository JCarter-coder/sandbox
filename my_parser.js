import fs from 'fs';
import csv from 'csv-parser'

const results = [];

fs.createReadStream('./textFiles/creditScoreList.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // Convert results to JSON and write to a file
    fs.writeFile('./textFiles/creditScoreList.json', JSON.stringify(results, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file', err);
      } else {
        console.log('JSON file saved successfully!');
      }
    });
  });
