export default function getStudentsByLocation(student, city) {
  const newArray = student.filter((elem) => elem.location === city);
  return newArray;
}
