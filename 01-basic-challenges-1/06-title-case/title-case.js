function titleCase(str) {
  newStr = str.toLowerCase().split(' ');

  return newStr
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1);
    })
    .join(' ');
}

module.exports = titleCase;
