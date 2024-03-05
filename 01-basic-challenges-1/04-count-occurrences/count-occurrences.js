function countOccurrences(str, char) {
  let occurancesCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) occurancesCount++;
  }

  return occurancesCount;
}

module.exports = countOccurrences;
