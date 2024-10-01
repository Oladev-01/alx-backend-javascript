export default function getListStudentIds(getObject) {
  if (!Array.isArray(getObject)) { return []; }
  const newOject = getObject.map((obj) => obj.id);
  // for each of the element in the array: id is appended to d new array
  return newOject;
}
