/**
 * In a try catch construction, wrap the code: 
 * console.log (a), let a = 3. And display an error - ‘let must be declared’ before use.
 */

try {
    console.log(a)
} catch(err) {
    console.log('let must be declared')
};
let a;

/**
 * When running 1/0, the error 'cannot be divided by zero'
 */

let one = 1
let zero = 0
try {
    let result = one/zero
    if (zero == 0) {
        throw new Error("cannot be divided by zero")
    }
} catch (err) {
    console.log(err.message)
}
