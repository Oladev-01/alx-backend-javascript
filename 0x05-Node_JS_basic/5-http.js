const http = require('http');
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
        if (studentData.length === 0) {
          res('Number of students: 0');
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
          let output = `Number of students: ${studentNo}\n`;
          for (const [field, std] of Object.entries(fieldCounts)) {
            output += `Number of students in ${field}: ${std.length}. List: ${std.join(', ')}\n`;
          }
          res(output.trim());
        }
      }
    });
  });
}
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const path = process.argv[2];
    if (!path) {
      res.statusCode = 500;
    } else {
      countStudents(path)
        .then((data) => {
          res.statusCode = 200;
          res.end(data);
        }).catch((error) => {
          res.statusCode = 404;
          res.end(error);
        });
    }
  }
});

app.listen(1245, () => { });
module.exports = app;
