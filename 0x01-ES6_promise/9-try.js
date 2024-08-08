export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const resp = mathFunction();
    queue.push(resp);
  } catch (err) {
    queue.push(err.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
