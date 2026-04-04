//*Primitive data types "Primitive types store single, simple values. They are immutable (you can’t change the value directly; you replace it)."
let data = 12;
data = 1.034565;
data = "Hello World";
data = true;
data = null;
data = undefined;

// *Non-primitive data types : Non-primitive types store collections or complex data. They are mutable (can be changed).
// data = { age: 12, name: "John" };
data = [1, 2, 3, 4, 5];
console.log(typeof data);

// * Is js Dynamically typed language ? Yes, JavaScript is a dynamically typed language, which means that variables can hold values of any type without explicit type declarations(**manually convert or define the type of a value yourself**). The type of a variable can change at runtime as you assign different values to it. For example:
// let myVariable = 42; // Initially a number
// console.log(typeof myVariable); // Output: "number"
// myVariable = "Hello"; // Now a string
// console.log(typeof myVariable); // Output: "string"
// In this example, `myVariable` is first assigned a number and then a string, demonstrating that JavaScript allows variables to hold values of different types without requiring explicit type declarations. (কম্পিউটার প্রোগ্রামিংয়ের ক্ষেত্রে, এর মানে হলো প্রোগ্রামারকে ভেরিয়েবল তৈরি করার সময় সেটি কী ধরনের ডাটা (ইন্টিজার, স্ট্রিং, বা বুলিয়ান) তা আলাদা করে লিখে দিতে হয় না; প্রোগ্রাম স্বয়ংক্রিয়ভাবেই তা বুঝে নেয়।) so that, you can assign any type of value to a variable without worrying about its type, and the language will handle it for you.  so,that, JavaScript is a dynamically typed language
