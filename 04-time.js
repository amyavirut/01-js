// // 20401
let a = () => console.log("Hello")
let b = (callback, timeout) => {
    setTimeout(callback, timeout * 1000)
}
b(a, 3)
b(a, 5)

// 20402
// we creat a function that logs hello 
// creat a function that increment function 

console.log("helloSeconds")

let seconds = 0
let t = setInterval(() => {
    seconds = seconds + 1
    console.log(`Hello ${seconds}`)
    if (i == 5) {
        clearInterval(t)
    }
}, 1000)


