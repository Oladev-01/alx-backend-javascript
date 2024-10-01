const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split data into lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check if the file contains data
    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    // Extract the headers (first row of the CSV)
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

      const field = studentData[studentData.length - 1]; // Assuming the last column is the field
      const firstName = studentData[0]; // Assuming the first column is the first name

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
  } catch (error) {
    // If an error occurs (like file not found), throw a custom error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
