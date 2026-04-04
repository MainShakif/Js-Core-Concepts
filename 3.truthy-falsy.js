let data = 0; //falsy
data = -0; //falsy
data = ""; //falsy
data = false; //falsy
data = null; //falsy
data = undefined; //falsy
data = NaN; //falsy

data = " "; //truthy
data = "home"; //truthy
data = "100"; //truthy
data = "-100"; //truthy
data = "hello js"; //truthy
data = {}; //truthy
data = []; //truthy
data = function () {}; //truthy

// if (data) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

let price = 0;
// if (!price) {
//   console.log("Price is truthy");
// } else {
//   console.log("Price is falsy");
// }

if (!!price) {
  console.log("Price is truthy");
} else {
  console.log("Price is falsy");
}

// *Summary***********

// Understanding the distinction between truthy and falsy values is crucial for writing effective conditional statements and controlling the flow of your JavaScript code.

// *falsy values and truthy values.
// 0, "", false, null, undefined, NaN are falsy values in JavaScript. All other values are truthy. This means that 'in a boolean context', falsy values will evaluate to false, while truthy values will evaluate to true. Understanding the concept of truthy and falsy values is important for writing effective conditional statements and controlling the flow of your JavaScript code.

// * ! and !! in JS

// The `!` operator is the logical NOT operator in JavaScript. It is used to negate a boolean value. When you apply `!` to a value, it converts the value to a boolean and then negates it.

// The `!!` operator is a common idiom in JavaScript that is used to convert a value to its boolean equivalent. It works by applying the `!` operator twice. The first `!` converts the value to a boolean and negates it, while the second `!` negates it again, resulting in the original boolean value.
