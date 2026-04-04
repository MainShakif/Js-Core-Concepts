// *Triple equals is a strict equality operator in JavaScript that checks for both value and type equality between two operands. It does not perform type coercion, meaning that if the types of the operands are different, it will return false without attempting to convert them to a common type.

console.log(2 === 2);
console.log(2 === "2");

// *Double equals is a comparison operator in JavaScript that checks for equality between two values, but it performs type coercion if the types of the values are different. This means that it will attempt to convert the values to a common type before making the comparison.
console.log(2 == 2);
console.log(2 == "2");
