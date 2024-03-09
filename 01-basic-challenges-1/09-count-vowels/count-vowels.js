function countVowels(str) {
  let vowelsCounter = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    switch (str[i].toLowerCase()) {
      case 'a':
        vowelsCounter++;
        break;
      case 'e':
        vowelsCounter++;
        break;
      case 'i':
        vowelsCounter++;
        break;
      case 'o':
        vowelsCounter++;
        break;
      case 'u':
        vowelsCounter++;
        break;
      case 'y':
        vowelsCounter++;
        break;
      default:
        break;
    }
  }
  return vowelsCounter;
}

module.exports = countVowels;
