export default function cleanSet(set, startString) {
  const result = [];
  if (startString.length !== 0) {
    for (const str of set) {
      if (str.startsWith(startString)) {
        result.push(str.slice(startString.length));
      }
    }
  }
  return result.join('-');
}
