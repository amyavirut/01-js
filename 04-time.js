// // 20401
let a = () => console.log("Hello")
let b = (callback, timeout) => {
    setTimeout(callback, timeout * 1000)
}
b(a, 3)
b(a, 5)

// 20402
// we crreat a function that logs hello 
// creat a function that increment function 

// Can reference t from this function!?!?
// (╯°□°)╯︵ ┻━┻
let i = 0
let helloSeconds = () => {
    console.log(`Hello ${++i}`)
    if (i == 5) {
        clearInterval(t)
    }
}
console.log("helloSeconds")
let t = setInterval(helloSeconds, 1000)


