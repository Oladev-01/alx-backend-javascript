const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const dataArray = data.split('\n').filter((line) => line.trim() !== '');
    const headers = dataArray[0].split(',');
    const studentData = dataArray.slice(1);
    if (studentData.length === 0) {
      console.log('Number of students: 0');
      return;
    }
    const fieldCounts = {};
    let totalStudents = 0;
    studentData.forEach((line) => {
      const student = line.split(',');
      if (student.length !== headers.length) {
        return;
      }
      const field = student[student.length - 1];
      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(student[0]);
      totalStudents += 1;
    });
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, std] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${std.length}. List: ${std.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
