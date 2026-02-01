console.log("Dayo is learning JavaScript!");
console.log("*******INTRO TO JAVASCRIPT*******");
// Variables: They are memory locations where data is store and can be used later in the program.

// A variable can only store a partocular type of data at a given time.


console.log("*******DYNAMIC TYPING*******");
// Dynamically typed language: JavaScript is a dynamically typed language, which means you don't have to specify the data type of a variable when you declare it. The type is determined automatically based on the assigned value.

// Dynamic - changeable type - you can change the type of data stored in a variable during the program execution. JavaScript does this automatically.

const fruit = "orange";
// console.log("Datatype of fruit = " + typeof fruit); // Output: string

let price = 150;
console.log("Datatype of first price = "  + typeof price); // Output: number
price = "One hundred and fifty";
console.log("Datatype of second price = " + typeof price); // Output: string

price = true;
console.log("Datatype of third price = " + typeof price); // Output: boolean



console.log("  ")
console.log("  ")
console.log("*******VARIABLE DECLARATION*******");
// Variable declaration keywords:
// 1. let: Introduced in ES6 (ECMAScript 2015), let allows you to declare block-scoped variables. Variables declared with let can be reassigned new values.

// 2. const: Also introduced in ES6, const is used to declare block-scoped variables that cannot be reassigned after their initial assignment. However, if the variable holds an object or array, the contents of the object or array can still be modified.

let city = "Lagos";
console.log("City:", city);

const country = "Nigeria";
console.log("Country:", country);

city = "Abuja"; // Reassigning a new value to the variable 'city'
console.log("Updated City:", city);

city = "Kano";
console.log("Updated City again:", city);
//country = "Ghana"; // This will throw an error because 'country' is declared with const



console.log("  ")
console.log("  ")
console.log("*******VARIABLE NAMING RULES*******");
//RULE: Choosing a variable name - Identifiers;
// 1. Must begin with a letter (a-z, A-Z), underscore (_), or dollar sign ($).
// 2. Subsequent characters can also include digits (0-9).
// 3. Cannot be a reserved keyword in JavaScript (like let, const, if, else, etc.).
// 4. Variable names are case-sensitive (e.g., myVar and myvar are different variables).
// 5. Should be descriptive and meaningful to enhance code readability.

let fruits = "Apple";
console.log("Fruits:", fruits);

let _vegetables = "Carrot";
console.log("Vegetables:", _vegetables);

console.log("  ")
console.log("  ")
console.log("*******DATA TYPES*******");
// Primitive Data Types in JavaScript:
// There are different types of variables in JavaScript:
// 1. Number: Represents numeric values, both integers and floating-point numbers.
//2.5, pi = 3.142, g = 9.81  <- Floating-point numbers
// 34, -10, 0 <- Integers

// let age = 25; // Integer
let temperature = 36.5; // Floating-point number

let kolo = 5000 + 10000

// 2. String: Represents sequences of characters, enclosed in single or double quotes.

let myGirlFriend = "Elizabeth";
let money = '2000 dollars';

// 3. Boolean: Represents logical values, either true or false.
let isVerified = true;
let hasSubscription = false;

// 4. Undefined: A variable that has been declared but not assigned a value has the value undefined.

let score;

// 5. Null: Represents the intentional absence of any object value.
let emptyValue = null;

//6. Symbol: Represents a unique identifier, often used as object property keys.
let uniqueId = Symbol('id');
console.log(typeof uniqueId); // Output: symbol

// 7. BigInt: Represents integers with arbitrary precision, allowing for the representation of very large numbers.
let bigNumber = BigInt(9007199254740991) + BigInt(1);
console.log(bigNumber); // Output: 9007199254740992n


console.log("  ")
console.log("  ")
console.log("*******TYPE CONVERSION*******");
// Type Conversion: The process of converting a value from one data type to another.
// Implicit Conversion: JavaScript automatically converts data types when necessary.
let implicitNum = "5" + 10; // The number 10 is converted to a string and concatenated
console.log(implicitNum); // Output: "510"
// Explicit Conversion: You manually convert data types using functions like Number(), String(), Boolean(), etc.
let explicitNum = Number("5") + 10; // The string "5" is explicitly converted to a number
console.log(explicitNum); // Output: 15

// let check = Number(prompt())
// console.log("You entered: " + check);
// console.log("Datatype of check = " + typeof check);
// console.log(check + 10)



























