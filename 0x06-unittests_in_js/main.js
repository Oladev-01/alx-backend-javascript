const calculateNumber = require('./1-calcul');
console.log(calculateNumber('SUM', 2, 4.5));
console.log(calculateNumber('SUBTRACT', -2, -4.5));
console.log(calculateNumber('DIVIDE', -2, 4.5));
console.log(calculateNumber('SUM', 2, -4.5));
console.log(calculateNumber('SUBTRACT', 2, -4.5));
console.log(calculateNumber('DIVIDE', 2, 0));
console.log(calculateNumber('SUM', -2, -4.5));
console.log(calculateNumber('DIVIDE', 0, 4.5));
console.log(calculateNumber('DIVIDE', -0, -0));
console.log(calculateNumber('DIVIDE', 1.4, 4.5))

