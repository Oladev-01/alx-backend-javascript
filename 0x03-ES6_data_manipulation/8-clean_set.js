export default function cleanSet(set, string) {
  const result = [];
  if (string.length !== 0) {
    for (const str of set) {
      if (str.startsWith(string)) {
        result.push(str.slice(string.length));
      }
    }
  }
  return result.join('-');
}
