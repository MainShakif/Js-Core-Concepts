function firstSum(arr1, arr2) {
  arr1[0] = 100;
  arr2[0] = 200;

  // const sum = arr1[0] + arr2[0];
  const first = arr1[0];
  const second = arr2[0];
  return first + second;
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
console.log("before the function call:", num1, num2); // *Summary: In JavaScript, when you pass objects (including arrays) to a function, you are passing a reference to the object. This means that any changes made to the properties of the object inside the function will affect the original object outside the function. In this example, the first elements of num1 and num2 are modified inside the firstSum function, and these changes are reflected in the original arrays after the function call, demonstrating that they were passed by reference.
console.log(firstSum(num1, num2));
console.log("after the function call:", num1, num2); // *Summary: In JavaScript, when you pass objects (including arrays) to a function, you are passing a reference to the object. This means that any changes made to the properties of the object inside the function will affect the original object outside the function. In this example, the first elements of num1 and num2 are modified inside the firstSum function, and these changes are reflected in the original arrays after the function call, demonstrating that they were passed by reference.
