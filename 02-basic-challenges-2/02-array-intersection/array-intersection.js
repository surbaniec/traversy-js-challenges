function arrayIntersection(arr1, arr2) {
  const arr1Set = new Set(arr1);
  const intersection = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1Set.has(arr2[i])) intersection.push(arr2[i]);
  }
  return intersection;
}

module.exports = arrayIntersection;
