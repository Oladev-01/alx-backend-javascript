export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const resp = mathFunction();
    queue.push(resp);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
