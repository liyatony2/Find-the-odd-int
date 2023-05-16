function findOdd(arr) {
  const countMap = {};
  
  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }
  
  for (let key in countMap) {
    if (countMap[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
  
  return -1; // Handle case when no odd occurrence is found
}
// Test cases
console.log(findOdd([7]));                                   // Output: 7
console.log(findOdd([0]));                                   // Output: 0
console.log(findOdd([1, 1, 2]));                             // Output: 2
console.log(findOdd([0, 1, 0, 1, 0]));                       // Output: 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Output: 4
