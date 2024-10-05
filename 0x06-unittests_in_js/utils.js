const Utils = {
    calculateNumber: (TYPE, a, b) => {
        a = Math.round(a)
        b = Math.round(b)
        if (TYPE === 'SUM') {
            return a + b;
        }
        else if (TYPE === 'SUBTRACT') {
            return a - b;
        }
        else if (TYPE === 'DIVIDE') {
            if (b === 0) {
                return 'Error';
            }
            else {
                return a / b;
            }
        }
    }
}

module.exports = Utils;
