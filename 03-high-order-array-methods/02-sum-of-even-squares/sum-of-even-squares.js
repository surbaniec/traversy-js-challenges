function sumOfEvenSquares(numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const squareResults = evenNumbers.map((num) => num * num);
  return squareResults.reduce((acc, currentValue) => acc + currentValue, 0);
}

module.exports = sumOfEvenSquares;
