// For each of the 10 tasks below, write a console.log(...) statement that satisfies the
// requirement. Write your code to accomplish the programming task beneath each comment.

// 1. Write code to output the following string to the console:
// "Hello World!"
console.log("Hello World!");
// 2. Write code to concatenate three strings and output the result to the console:
// "Hello", " ", "World!"
console.log("Hello", " ", "World!");
// 3. Write code to output "Hello" on one line and "World!" on the next line to the console.
// *Note: You should only have one console.log() statement - how do you add a new line in
// a string?...
console.log("Hello\nWorld!"); // To add a new line in a string you add \n and everything after will be in a new line.
// 4. Write code to output the result of the arithmetic expression to the console:
// 3 * 8 + 2;
console.log(3 * 8 + 2); // Result: 26
// 5. Write code to output the result of the comparison:
// 5 is less than 10.
console.log(5 < 10) // Result: True
// 6. Write code to output the result of the comparison:
// 10 is greater than 5.
console.log(10 > 5) // Result: True
// 7. Write code to output the result of the comparison:
// "Apples" is NOT equal to "Oranges"
console.log("Apples" != "Oranges") // Result: True
// 8. Write code to output the result of the comparison:
// 10 * 10 is greater than 50 AND 5 * 5 is less than 50
console.log(10 * 10 > 50) // Result : True
console.log(5 * 5 < 50) // Result: True
// 9. Write code to output the result of the comparison:
// 1 + 2 is greater than 5 OR 1 * 10 is greater than 5
console.log(1 + 2 > 5 || 1 * 10 > 5) // Result: One of the two statements is true so the overall statement is true
// 10. Write code that demonstrates an automatic type conversion as shown in Chapter 01.
// Const Variable
const pi = 3.14;
let myNumber = "5" // Converts 5 to mynumber so so that Math.min can compare it with pi. 
console.log(Math.min(pi, myNumber)); // It Chooses the smaller number