const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentData = lines.slice(1);
      if (studentData.length === 0) {
        console.log('Number of students: 0');
        return;
      }
      const headers = lines[0].split(',');
      const fieldCounts = {};
      let studentNo = 0;
      studentData.forEach((student) => {
        const aStudent = student.split(',');
        if (aStudent.length !== headers.length) {
          // eslint-disable-next-line no-useless-return
          return;
        }
        const field = aStudent[aStudent.length - 1];
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(aStudent[0]);
        studentNo += 1;
      });
      for (const [field, std] of Object.entries(fieldCounts)) {
        console.log(`Number of students: ${studentNo}`);
        console.log(`Number of students in ${field}: ${std.length}. List: ${std.join(', ')}`);
      }
    }).catch(() => {
      console.log('Cannot load the database');
    });
}

module.exports = countStudents;
