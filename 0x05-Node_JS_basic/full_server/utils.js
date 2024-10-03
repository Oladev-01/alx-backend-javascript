const fs = require('fs');

export default function readDatabase(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        rej(err);
      } else {
        const dataLines = data.split('\n').filter((line) => line.trim() !== '');
        const studentData = dataLines.slice(1);
        const arr = {};
        studentData.forEach((std) => {
          const [student, , , field] = std.split(',');
          if (!arr[field]) {
            arr[field] = [];
          }
          arr[field].push(student);
        });
        res(arr);
      }
    });
  });
}
