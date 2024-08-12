export default function getStudentIdsSum(getList) {
  return getList.reduce((acc, obj) => acc + obj.id, 0);
}
