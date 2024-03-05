function findMaxNumber(arr) {
  let largestNumber = arr[0];

  arr.forEach((num) => {
    num > largestNumber ? (largestNumber = num) : largestNumber;
  });

  return largestNumber;
}

module.exports = findMaxNumber;
