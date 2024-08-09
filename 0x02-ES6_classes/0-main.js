function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        readFile(path, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

try {
    const data = readFilePromise("babel.config.js");
    console.log(data);
} catch (err) {
    console.error(err);
}
