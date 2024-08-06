export default function iterateThroughObject(reportWithIterator) {
  const retPartiton = [];
  for (const obj of reportWithIterator) {
    retPartiton.push(obj);
  }
  return retPartiton.join(' | ');
}
