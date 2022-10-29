/**
 * In a try catch construction, wrap the code: 
 * console.log (a), let a = 3. And display an error - ‘let must be declared’ before use.
 */

try {
    console.log(a);
    let a = 1;
} catch(err) {
    console.log('let must be declared before use');
};

/**
 * When running 1/0, the error 'cannot be divided by zero'
 */

let one = 1;
let zero = 0;
let divide = (a, b) => {
    if (b === 0){
        throw new Error('cannot be divided by zero');
    }
    return a / b;
}

try {
    divide(one, zero)
} catch (err) {
    console.log('cannot be divided by zero')
}
