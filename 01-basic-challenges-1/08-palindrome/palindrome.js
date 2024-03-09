function isPalindrome(str) {
  const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversed = '';

  for (let i = formatedStr.length - 1; i >= 0; i--) {
    reversed += formatedStr[i];
  }

  return reversed === formatedStr ? true : false;
}

module.exports = isPalindrome;
