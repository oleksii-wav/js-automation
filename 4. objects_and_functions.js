/**
 * Create a car object, add a color property to it with the value equals 'black'
 */

const car = {
    color: "black"
};

/**
 * Change the color property of the car object to 'green'
 */

car.color = "green";

/**
 * Add the power property to the car object, 
 * which is a function and displays the engine power to the console
 */

car.power = function () {
    console.log('200')
};

/**
 * Pears and apples are accepted to the warehouse, write a function
 * that returns the result of adding the number of accepted pears and apples
 */

let pears = 10;
let apples = 20;
let fruitSum = (pears, apples) => pears + apples;
fruitSum(pears, apples);

/**
 * Your name is saved in the payment terminal, 
 * write a function to define the name in the terminal 
 * (if you entered your name, then hello + name, if not, then there is no such name)
 */

let names = ["John", "Alice", "Mark", "Oleksii"];
let checkName = (name) => {
    (names.includes(name)) ? console.log("Hello", name) : console.log("There is no such name")
};

/**
 * Write a function for calculating the type of argument and type output to the console
 */

let checkType = (arg) => {
    console.log(typeof arg)
};

/**
 * Write a function that determines whether a number is prime or not
 */

let checkPrime = (number) => {
    let isPrime = true;
    if (number == 1) {
        console.log(number, "is not a prime number")
    } else if (number > 1) {
        for (let i = 2; i <= number/2; i++){
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime == false) {
            console.log(number, "is not a prime number")
        } else { 
            console.log(number, "is a prime number")
        }
    } else { 
        console.log(number, "is not a prime number")
    }
}