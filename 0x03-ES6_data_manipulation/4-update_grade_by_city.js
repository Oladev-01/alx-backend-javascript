export default function updateStudentGradeByCity(getList, city, getgGrades) {
  return getList
    .filter((student) => student.location === city)
    .map((student) => {
      const getGrade = getgGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: getGrade ? getGrade.grade : 'N/A',
      };
    });
}
