function removeDuplicates(arr) {
  const uniqueEl = new Set();

  arr.forEach((el) => {
    uniqueEl.add(el);
  });
  return Array.from(uniqueEl);
}

module.exports = removeDuplicates;
