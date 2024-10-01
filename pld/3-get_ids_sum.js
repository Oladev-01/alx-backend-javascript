export default function getStudentIdsSum(getList) {
  // reduce accepts a callbckFn and start idx. the fn accepts 2 args: acc, curr idx: start idx <str, int, float>
  const sumId = getList.reduce((acc, elem) => acc + elem.id, 0);
  return sumId;
}
