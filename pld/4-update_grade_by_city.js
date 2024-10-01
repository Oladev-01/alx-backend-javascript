export default function updateStudentGradeByCity(students, city, gradeArray) {
  return students
    .filter((std) => std.location === city)
    .map((std) => {
      const getGrade = gradeArray.find((grade) => grade.studentId === std.id);
      return {
        ...std,
        grade: getGrade ? getGrade.grade : 'N/A',
      };
    });
}
