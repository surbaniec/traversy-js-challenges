function findFirstNonRepeatingCharacter(str) {
  const charMap = new Map();

  for (let i = 0; i < str.length; i++) {
    charMap.set(str[i], (charMap.get(str[i]) || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (charMap.get(str[i]) === 1) {
      return str[i];
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
