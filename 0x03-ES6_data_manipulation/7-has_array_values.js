export default function hasValuesFromArray(set, arr) {
  const checkArr = arr.find((arr) => set.has(arr) === false);
  if (checkArr) {
    return false;
  }
  return true;
}
