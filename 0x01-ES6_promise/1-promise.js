export default function getFullResponseFromAPI(success) {
  return new Promise((res, rej) => {
    if (success) {
      res({
        status: 200,
        body: 'Sucess',
      });
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      rej('The fake API is not working currently');
    }
  });
}
