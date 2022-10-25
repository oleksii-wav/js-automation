/**
 * Given the string 'ahb acb aeb aeeb adcb axeb'. 
 * Write a regular expression that matches the strings 
 * ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
 */

let string1 = 'ahb acb aeb aeeb adcb axeb'
let regex1 = /a[hce]?b/g
console.log(string1.match(regex1))

/**
 * Given the string '2 + 3 223 2223'. 
 * Write a regex that finds line 2 + 3 without capturing the rest
 */

let string2 = '2 + 3 223 2223'
let regex2 = /^2\s[+]\s3/
console.log(string2.match(regex2))

/**
 * Get the day, month and year of the current date 
 * and output it to the console separately
 */

let year = new Date()
console.log(year.getDay())
console.log(year.getMonth())
console.log(year.getFullYear())