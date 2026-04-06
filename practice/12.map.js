// *Objective:*
// Create a function that takes an array of numbers and returns a new array with each number multiplied by 2.

function doubleArray(arr) {
  const newArr = [];
  for (const num of arr) {
    newArr.push(num * 2);
  }
  return newArr;
}
const result = doubleArray([1, 2, 3, 4]);
console.log("New Array is : ", result);
