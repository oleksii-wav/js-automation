/**
 * Given an array consisting of movie names, 
 * iterate over the array with the output of the names of each movie to the console
 */

let movies = ["Empire Strikes Back", "Inception", "Borat", "Arrival", "Snatch"]
movies.forEach((elem) => console.log(elem))

/**
 * Given an array of car manufacturers, convert the array to a string and back to an array
 */

let manufacturers = ["Toyota", "Ford", "Kia", "Mercedes", "Volkswagen"]
let stringManufacturers = manufacturers.join(" ")
let arrayManufacturers = stringManufacturers.split(" ")
console.log(stringManufacturers)
console.log(arrayManufacturers)

/**
 * Given an array of the names of your friends, add the words hello to each element of the array
 */

let friends = ["Mark", "Spencer", "Anna", "Purna"]
let helloFriends = friends.map((friend) => "Hello " + friend)
console.log(helloFriends)

/**
 * Convert numeric array to Boolean
 */

let numbers = [-1, 0, 1, 2, 3, 4, 5]
let boolNumbers = []
numbers.forEach((number) => boolNumbers.push(Boolean(number)))
console.log(boolNumbers)

/**
 * Sort the array [1,6,7,8,3,4,5,6] in descending order
 */

let sortArr = [1,6,7,8,3,4,5,6]
sortArr.sort((a, b) => b - a)
console.log(sortArr)

/**
 * Filter array [1,6,7,8,3,4,5,6] by value> 3
 */

let unfilteredArr = [1,6,7,8,3,4,5,6]
filterArr = unfilteredArr.filter((number) => number > 3)
console.log(filterArr)

/**
 * Write a function that takes two parameters - an array and a number 
 * and outputs the index of an array element equal to a number
 */

let getIndex = (arr, number) => {
    if (arr.indexOf(number) == -1) console.log(`There is no ${number} in the given array`)
    else console.log(`The index of ${number} is ${arr.indexOf(number)}`)
}

getIndex([1,2,3,4,5], 5)

/**
 * Implement a loop that will print the number 'a' until it is less than 10
 */

let a = 0
do {
    console.log(a)
    a++
} while (a < 10)

/**
 * Implement a loop that prints prime numbers to the console
 */

for (number = 0; number < 100; number++){
    let isPrime = true;
    if (number > 1) {
        for (let i = 2; i <= number/2; i++){
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime == true) {
            console.log(number)
        }
    }
}

/**
 * Implement a loop that prints odd numbers to the console
 */

for (i = 1; i < 20; i++) {
    if (i % 2 == 0) console.log(i)
}