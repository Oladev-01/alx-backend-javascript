function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const fullYear = getCurrentYear();
  const budget = {
    [`income-${fullYear}`]: income,
    [`gdp-${fullYear}`]: gdp,
    [`capita-${fullYear}`]: capita,
  };

  return budget;
}
