const countStudents = require('./2_try');

countStudents('database.csv')
 .then(() => {
    console.log('Done');
 }).catch((error) => {
    console.log(`there was an error: ${error}`);
 });

console.log('Before');
