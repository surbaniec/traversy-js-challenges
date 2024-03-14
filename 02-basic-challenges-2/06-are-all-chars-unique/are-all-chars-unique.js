function areAllCharactersUnique(str) {
  const uniqueCharacters = new Set(str);
  let setLength = 0;

  uniqueCharacters.forEach((el) => {
    setLength++;
  });

  if (setLength !== str.length) return false;
  else return true;
}

module.exports = areAllCharactersUnique;
