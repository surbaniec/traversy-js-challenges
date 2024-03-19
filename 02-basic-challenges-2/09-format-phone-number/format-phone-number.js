function formatPhoneNumber(numbers) {
  const number = numbers.join('');
  const firstPiece = number.slice(0, 3);
  const secondPiece = number.slice(3, 6);
  const thirdPiece = number.slice(6);

  return `(${firstPiece}) ${secondPiece}-${thirdPiece}`;
}

module.exports = formatPhoneNumber;
