const pi = 3.14;
function calculation(a, b) {
  const factor = 0.5;
  const result = (a + b) * factor * pi;
  const total = doubleIt(result);
  const value = addTwoNumbers(total);
  function addTwoNumbers(x, y) {
    return x + y;
  }

  return value;
}

function doubleIt(num) {
  return num;
}

calculation(20, 30);
// console.log(result, pi);

// *Summary:
/*
*1. Global Scope
    A variable declared outside any function or block is in the global scope.  It can be accessed from anywhere in the code, including inside functions.

 *2. Function Scope
    Variables declared inside a function are only accessible inside that function. They cannot be accessed from outside the function.

*3. Block Scope (ES6)
    Variables declared with let and const inside {} (like in if, for, etc.) are block scoped. They can only be accessed within that block and are not accessible outside of it.

*var vs let vs const (Scope behavior)   
    if (true) {
        var a = 5;
        let b = 10;
        const c = 15;
    }

console.log(a); // ✅ works (function/global scoped)
console.log(b); // ❌ Error (block scoped)
console.log(c); // ❌ Error (block scoped)
// ***************************************************


*4. Lexical Scope (Important concept)

*JavaScript uses lexical scope, meaning scope is determined by where variables are written in the code. Inner functions have access to variables declared in their outer functions, but not the other way around.
*/

/*
 *Simple Summary of Scope in JavaScript:
 *****Global scope → accessible everywhere
 *****Function scope → accessible inside the function
 *****Block scope → accessible inside {} only
 *Lexical scope → inner functions can access outer variables
 */

/*
 *TDZ SUMMARY:
 *One-line definition
 **TDZ is the time where a let or const variable exists but cannot be accessed until it is initialized.
 */

/*
     *Summary of Hosting:
        !Simple Way to Remember
            Hoisting = declarations go up
            Initialization stays where it is 
     */
