import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());
dollar.name = 'Yen';
console.log(dollar.displayFullCurrency());
