import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const getStudentData = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';
      Object.keys(getStudentData)
        .sort()
        .forEach((field) => {
          const students = getStudentData[field];
          response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });
      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const studentData = await readDatabase(process.argv[2]);
      const students = studentData[major];
      const response = `List: ${students.join(', ')}\n`;
      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}
