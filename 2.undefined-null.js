let data;
// console.log(data);

const data2 = 12;
// console.log(data2);

// **********************************************************************
const add = (a, b) => {
  //   console.log(a, b);
};

add();
// **********************************************************************

const student = {
  name: "John",
  age: 20,
  salary: null,
};
console.log(student.marks);

delete student.name;
console.log(student.name);
// **********************************************************************

// ARRAYS
const arr = [1, 2, 3, 4, 5];
// console.log(arr[10]); // undefined
delete arr[2];
console.log(arr);

// **********************************************************************
console.log(typeof undefined);
console.log(typeof null);

// *Summary:
// 1. `undefined` is a primitive data type that represents the absence of a value or an uninitialized variable. It is automatically assigned to variables that are declared but not initialized, and to function parameters that are not provided with an argument.

//? 2. `null` is a primitive data type that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or to reset a variable to an empty state.

// 3. Both `undefined` and `null` are falsy values in JavaScript, meaning they evaluate(মূল্যায়ন) to `false` in boolean contexts. However, they are distinct(স্বতন্ত্র) types and serve different purposes in the language.

// **“what are the different ways you can get undefined in JavaScript?”

// 1. Uninitialized Variables: When you declare a variable without assigning a value, it is automatically assigned the value `undefined`.

// ?2. Function Parameters: If a function is called without providing an argument for a parameter, that parameter will be `undefined`.

// 3. Object Properties: If you try to access a property that does not exist on an object, it will return `undefined`.

// ?4. Array Elements: If you try to access an index in an array that does not exist, it will return `undefined`.

// 5. Return Value of Functions: If a function does not explicitly return a value, it will return `undefined` by default.

// ? 6. Explicit Assignment: You can explicitly assign `undefined` to a variable, although this is generally not recommended as it can lead to confusion.

//Null vs Undefined:
// 1. `undefined` is a type itself, while `null` is an object. This means that `typeof undefined` returns "undefined", while `typeof null` returns "object".

// ? 2. `undefined` typically indicates that a variable has been declared but has not yet been assigned a value, while `null` is used to represent the intentional absence of any object value.

// 3. Both `undefined` and `null` are falsy values in JavaScript, meaning they evaluate to `false` in boolean contexts. However, they are distinct types and serve different purposes in the language.

// *In summary, `undefined` is used to indicate that a variable has not been assigned a value or that a function parameter is missing, while `null` is used to represent the intentional absence of any object value. Both are falsy values, but they are distinct types in JavaScript.

// *In JavaScript, `undefined` and `null` are both primitive data types that represent the absence of a value, but they have different meanings and uses.
