let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']

// 20301 
let testString = "abc"
let reverseString = (s) => s.split('').reverse().join('')
console.log(reverseString(testString))

let splitTing = (p) => p.split(' ')
    .map(reverseString).join(' ')

// Array.join (thus join is a function on all Arrays)
// Takes one parameter, the "separator" (a string) which will be inserted
// between the elements and then concatenated into a string.

// make array and iterate into each element 
// let result = (b) => {
//     splitTing.forEach(splitTing.reverse())
//     console.log(b)    

console.log("reverseString")
console.log(splitTing(phrase))

// 20302
// we want to tranform an array of strings into an array of objects.
// .map is a good tool for this problem because map() will transforme elements in the array
// map() needs a function which take one parameter, the element.
// this function returns the transformed element.

// write a function that takes string of the form '$34'
// converts it into am object: {currency: '$', value: 34} and returns it


let convertPrice = (price) => {
    // first we seperate cerrency and number
    let currency = price.slice(0, 1)
    let value = Number(price.slice(1, price.length))
    return {
        currency: currency,
        value: value
    }
}

let convertPrices = (a) => a.map(convertPrice)

console.log("convertPrice")
console.log(convertPrices(prices))

// 20303
// first we have to check if each element in the array with filter() beacause filter only return element that match the function we set
// in this case we use .includes because it's a method that we use to check if the string contain the same characters 


// check if string is a palindrome
// if (thing in here is a "boolean" expression)
// meaning that it returns true or false
// 1 == 1 is a boolean expression (true in this case)
// 100 > 200 is a boolean expression (false here)

// Filter returns a new array with only elements from the original
// array that are selected by the function that filter takes as a parameter
// The function takes a single parameter, the element
// And must return true or false.
// True to include the element in the new array
// False to ignore it.

let filterNames = (namesinA) => {
    return namesinA.filter(name => name === reverseString(name))
}
console.log("filterNames")
console.log(filterNames(names))

//20304



//20305
// first creat a function that loops numbers from 0 - 20
// if number *3, log fizz
// if number *5, log buzz
// if * both numbers, log fizzbuzz
// if others log the number itself 

// first of all we creat for function first so that we can loop the numbers

for (let i = 0; i < 21; i++) {
    // if i divided by 3 has no remainder 
    if (i == 0) {
        console.log(i)
    } else if ( i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}

// 20306
let a = (x, y) => x + y
let b = (c, d, e, f) => c(d, e) - f
console.log(b(a, 10, 4, 6)) 


