export default function cleanSet(set, string) {
  if (string.length === 0) { return []; }
  const result = [];
  for (const str of set) {
    if (str.startsWith(string)) {
      result.push(str.slice(string.length));
    }
  }
  return result.join('-');
}
