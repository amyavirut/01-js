let products = [{name: 'bread',price: 3.5},{name:'orange', price: 1.3},{name:'gum', price: 2.8}]

//20201
let numBers = 3.6

let returnNumber = (b) => {
    console.log(Math.round(b))
}
console.log("returnNumber")
returnNumber(numBers)

//20202
let returnPrice = (b) => {
    return b.map((s) => {
        s.price = Math.round(s.price)
        return s
    })
}
console.log("returnPrice")
console.log(returnPrice(products))

//20203
let twoPara = (input, places) => {
    return Number.parseFloat(input).toFixed(places)
}
console.log(twoPara(2.324, 1))
console.log(twoPara)

//20204 
let powerTwo = (base, exp) => {
    return Math.pow(base, exp)
}
console.log(powerTwo(2, 2))

//20205
let randomNum = () => {
    return Math.round(Math.random() * 10)
}
console.log(randomNum()) 

//20206
let randomNumP = (p) => {
    return Math.round(Math.random() * p)
}
console.log(randomNumP(35)) 