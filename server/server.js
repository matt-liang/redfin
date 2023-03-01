const fs = require('fs');
const csv = require('csv-parser');
const express = require('express');
const app = express();

const results = [];

const readCSVFile = () => {
  fs.createReadStream('redfin.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
    })
}

readCSVFile();

app.get('/api/:id', (req, res) => {
  let id = req.params.id.toLowerCase();
  let houses = [];
  results.forEach((house) => {
    if (house["ADDRESS"].toLowerCase().includes(id) || house["ZIP OR POSTAL CODE"].includes(id)) {
      houses.push(house);
    }
  })
  res.status(201).send(houses);
});

app.listen(5000, () => {
  console.log('Started on port 5000');
})