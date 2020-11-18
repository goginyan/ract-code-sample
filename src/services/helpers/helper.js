const numberFormat = (number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)
};


export { numberFormat };