function findMissingNumber(arr) {
  if (!arr) return undefined;
  if (arr.length === 0) return 1;

  let n = arr.length + 1;
  const nSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return nSum - actualSum;
}

module.exports = findMissingNumber;
