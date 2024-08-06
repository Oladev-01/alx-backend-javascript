export default function appendToEachArrayValue(array, appendString) {
  let run = 0;
  const newArray = [];
  for (const idx of array) {
    newArray[run] = appendString + idx;
    run += 1;
  }
  return newArray;
}
