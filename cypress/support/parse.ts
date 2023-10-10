function findDollarAmountTextInString(str: string) {
  const regex = /\$[0-9]+(\.[0-9]{2})?/;
  return str.search(regex);
}
