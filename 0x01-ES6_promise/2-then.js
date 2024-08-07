export default function handleResponseFromAPI(promise) {
  return new Promise((resolve) => {
    promise
      .then(() => {
        resolve({
          status: 200,
          body: 'success',
        });
      })
      .catch(() => {
        resolve({ Error: new Error() });
      })
      .finally(() => {
        console.log('Got a response from the API');
      });
  });
}
