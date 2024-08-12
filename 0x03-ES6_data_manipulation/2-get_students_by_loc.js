export default function getStudentsByLocation(getList, city) {
  return getList.filter((obj) => obj.location === city);
}
