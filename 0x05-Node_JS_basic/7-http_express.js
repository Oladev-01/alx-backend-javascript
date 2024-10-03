const express = require('express');

const app = express();

const fs = require('fs');

function countStudents(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // eslint-disable-next-line prefer-promise-reject-errors
        rej('Cannot load data from database');
      } else {
        const dataLines = data.split('\n').filter((line) => line.trim() !== '');
        const headers = dataLines[0].split(',');
        const studentData = dataLines.slice(1);
        let output = 'This is the list of our students\n';
        if (studentData.length === 0) {
          res(`${output}Number of students: 0`);
        } else {
          const fieldCounts = {};
          let studentNo = 0;
          studentData.forEach((std) => {
            const student = std.split(',');
            if (student.length !== headers.length) {
              rej();
            }
            const field = student[student.length - 1];
            if (!fieldCounts[field]) {
              fieldCounts[field] = [];
            }
            fieldCounts[field].push(student[0]);
            studentNo += 1;
          });
          output += `Number of students: ${studentNo}\n`;
          for (const [field, std] of Object.entries(fieldCounts)) {
            output += `Number of students in ${field}: ${std.length}. List: ${std.join(', ')}\n`;
          }
          res(output.trim());
        }
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let filePath = process.argv[2];
  if (!filePath) {
    filePath = 'database.csv';
  }
  countStudents(filePath)
    .then((data) => {
      res.send(data);
    }).catch((error) => {
      res.status(500);
      res.send(error);
    });
});

app.listen(1245, () => { });
module.exports = app;
