console.log(2 == 2);
console.log(2 == "2");

console.log(0 == false);
console.log(true == "1");
console.log(false == "0");
console.log(null == undefined); // *In JavaScript, `null` and `undefined` are considered equal when using the double equals operator (`==`) because they both represent the absence of a value.
console.log(NaN == NaN);

console.log([5] == "5"); // *In JavaScript, when you compare an array with a string using the double equals operator (`==`), the array is first converted to a string before the comparison is made. In this case, the array `[5]` is converted to the string `"5"`, and since both sides of the comparison are now strings with the same value, the result is `true`.


console.log([] == []);
console.log({} == {});


// *Summary:
// 1. Double equals (`==`) থাকলে JavaScript প্রথমে দুইটি অপারেন্ডকে একই ধরনের ডাটাতে কনভার্ট করে তারপর তাদের মান তুলনা করে। এই প্রক্রিয়াকে টাইপ কোঅ্যারশন (type coercion) বলা হয়। তাই, `2 == "2"` সত্য হবে কারণ `"2"` স্ট্রিংটি সংখ্যায় রূপান্তরিত হয়ে `2` হয়ে যায়।      


// *2. Triple equals (`===`) থাকলে JavaScript অপারেন্ডের টাইপ এবং মান উভয়ই তুলনা করে। এটি টাইপ কোঅ্যারশন করে না, তাই `2 === "2"` মিথ্যা হবে কারণ তাদের টাইপ ভিন্ন (একটি সংখ্যা এবং একটি স্ট্রিং)। 

// 3. যদি ২টা non-primitive ডাটা টাইপ এর মধ্যে double equals (==) দিয়ে তুলনা করা হয়, তাহলে js তাদের 'reference কে compare করে'। তাই, `[] == []` এবং `{}` == {}` মিথ্যা হবে কারণ তারা আলাদা আলাদা reference ধারণ করে।


// *4. যদি ১টা primitive এবং আরেকটা non-primitive  অথবা ২টাই primitive  ডাটা টাইপ এর মধ্যে double equals (==) দিয়ে তুলনা করা হয়, তাহলে js তাদের 'type কে compare করে'। তাই, `2 == "2"` সত্য হবে কারণ `"2"` স্ট্রিংটি সংখ্যায় রূপান্তরিত হয়ে `2` হয়ে যায়। 

// *5. `null` এবং `undefined` কে double equals (`==`) দিয়ে তুলনা করলে তারা সমান (equal) হবে কারণ উভয়ই মানের অনুপস্থিতি (absence of value) নির্দেশ করে। তবে, triple equals (`===`) দিয়ে তুলনা করলে তারা সমান হবে না কারণ তাদের টাইপ ভিন্ন (একটি `null` এবং অন্যটি `undefined`)।