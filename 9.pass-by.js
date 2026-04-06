function multiply(a, b) {
  a = a - 5;
  b = b - 10;
  console.log("VALUE OF A & B:", a, b);
  return a * b;
}

let x = 10;
let y = 20;
console.log("Before calling", x, y); // *Summary: In JavaScript, when you pass primitive data types (like numbers, strings, booleans) to a function, you are passing a copy of the value. This means that any changes made to the parameters inside the function do not affect the original variables outside the function. In this example, the values of x and y remain unchanged after calling the multiply function, demonstrating that they were passed by value.
const result = multiply(x, y);
console.log(result);
console.log("After calling", x, y); // *Summary: In JavaScript, when you pass primitive data types (like numbers, strings, booleans) to a function, you are passing a copy of the value. This means that any changes made to the parameters inside the function do not affect the original variables outside the function. In this example, the values of x and y remain unchanged after calling the multiply function, demonstrating that they were passed by value.
