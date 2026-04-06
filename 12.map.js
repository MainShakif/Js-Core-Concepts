// *Objective:*
// Create a function that takes an array of numbers and returns a new array with each number multiplied by 2.

// const arr = [1, 2, 3, 4, 5];
// const doubledArr = [];
function doubleArray(arr) {
  const newArr = [];
  for (const num of arr) {
    newArr.push(num * 2);
  }
  return newArr;
  //   console.log(newArr);
}
const result = doubleArray([1, 2, 3, 4, 5]);
console.log("Doubled array is =", result);

//*OBJECTIVE: *There is an array of numbers and push each number to a new array with each number multiplied by 2 using 'for of' loop.*
// const arr = [1, 2, 3, 4, 5];
// const doubledArr = [];

// for (const num of arr) {
//   doubledArr.push(num * 2);
// }
// console.log(doubledArr);
