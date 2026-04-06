function add(a, b) {
  console.log("Arguments object:", arguments, arguments[2]);
  const args = [...arguments];
  console.log("Array of arguments:", args);
}

add(5, 10, 15, 20);

/*
 *Summary:
 *The arguments object is an array-like object available within all non-arrow functions in JavaScript. It contains the values of the arguments passed to that function. In this example, when the add function is called with the arguments 5, 10, 15, and 20, the arguments object will contain those values, allowing you to access them even if you don't explicitly define parameters for the function.
 */
