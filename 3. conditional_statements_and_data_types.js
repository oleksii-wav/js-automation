let integer = 10;
let string = "3.14";
let boolean = true;

/**
 * 1. Perform addition of various types (string + boolean, string + number, number + boolean)
 */

let strBoolSum = string + boolean; // "3.14true"
let intStrSum = integer + string; // "103.14"
let intBoolSum = integer + boolean; // 11

/**
 * 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)
 */

let strBoolMult = string * boolean; // 3.14
let intStrMult = integer * string; // 31.400000000000002
let intBoolMult = integer * boolean; // 10

/**
 * 3. Divide different types (string / boolean, string / number, number / Boolean)
 */

let strBoolDiv = string / boolean; // 3.14
let intStrDiv = integer / string; // 3.184713375796178
let intBoolDiv = integer / boolean; // 10

/**
 * 4. Perform explicit conversion (number, string, boolean)
 */

let defaultString = '100'
let defaultInteger = 1
let defaultBoolean = false

let intToString = String(defaultInteger) // "1"
let intToBool = Boolean(defaultInteger) // true
let boolToString = String(defaultBoolean) // "false"
let boolToInt = Number(defaultBoolean) // 0
let stringToInt = Number(defaultString) // 100
let stringToBool = Boolean(defaultString) // true
