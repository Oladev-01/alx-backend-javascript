const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      // Split data into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        return;
      }

      // Extract the headers (first line of the CSV)
      const headers = lines[0].split(',');

      // Students' data starts from the second line
      const students = lines.slice(1);

      // Initialize an object to store students by field
      const fieldCounts = {};

      // Total number of students
      let totalStudents = 0;

      students.forEach((line) => {
        const studentData = line.split(',');

        // Skip invalid lines (empty or malformed)
        if (studentData.length < headers.length) {
          return;
        }

        const field = studentData[studentData.length - 1]; // Assuming last column is the field
        const firstName = studentData[0]; // Assuming first column is the first name

        // Add student to the respective field
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(firstName);

        // Increase total student count
        totalStudents += 1;
      });

      // Output the total number of students
      console.log(`Number of students: ${totalStudents}`);

      // Output the number of students in each field and their names
      for (const [field, students] of Object.entries(fieldCounts)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    })
    .catch(() => {
      // If an error occurs (like file not found), reject the promise with a custom error
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
