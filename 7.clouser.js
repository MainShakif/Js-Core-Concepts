function outerFunction() {
  function innerFunction() {
    console.log("Hello from the inner function!");
  }
  return innerFunction;
}

const result = outerFunction();
// console.log(output); // This will call the inner function and print "Hello from the inner function!" to the console.
// result();

//* innerFunction(); // This will throw an error because innerFunction is not defined in the global scope.

function counter(owner) {
  let count = 0;
  function increment() {
    count = count + 1;
    console.log("Count value is:", owner, count);
    // console.log("Owner value :");
  }
  return increment;
}
const myCounter = counter();
// console.log(myCounter);
// myCounter();
// myCounter();

const rahimCounter = counter("Rahim");
const karimCounter = counter("Karim");
rahimCounter();
rahimCounter();
rahimCounter();

karimCounter();
karimCounter();
karimCounter();

rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();

karimCounter();
karimCounter();
// *Summary:
// 1. A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It allows the inner function to access variables and parameters of the outer function even after the outer function has finished executing.
