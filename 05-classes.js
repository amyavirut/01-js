// 20501
//creata class car 
//creat function that takes 3 parameters

// first we creat a class car which takes (make, model, color) as parameters inside 
class Car {
    constructor(make, model, color) {
        this.make =  make
        this.model = model
        this.color = color
    }
}

let buildCar = (make, model, color) => {
    return new Car(make, model, color)
}
console.log(buildCar('Mini Cooper', 'S', 'red'))

// 20502
let names = ['Alice', 'Bernard', 'Catherine', 'David']
let jobs = ['Accountant', 'Biz Manager', 'Cleaner', 'Director']

class Employee {
    constructor(name, job) {
        this.name = name
        this.job = job
    }
}

let makeEmployees = (names, jobs) => { 
    return names.map((name, idx) => { //map inside names array to each position of element
        // name = Alice, idx = 0
        // name = Benard , idx = 1
        let job = jobs[idx] //creat a variable to get position from jobs array
       return new Employee(name, job) //now we can return object of name and job
    })   
}
console.log(makeEmployees(names, jobs))


// 20503
let belts = ['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']

class Karateka {
    constructor(name) {
        this.name = name
        this.belt = belts[0]
    }
    increaseRank() {
        let currentBeltIdx = belts.indexOf(this.belt)
        let newBeltIdx = currentBeltIdx + 1 
        if (newBeltIdx < belts.length) {
            this.belt = belts[newBeltIdx]
        } 
    }
}
let amy = new Karateka('Amy')

let fight = (k) => {
    let time = 0  
    let timer = setInterval(() => {
        time = time + 1
        
        let score = Math.round(Math.random() * 10)
        if (score > 8) {
            k.increaseRank()
        } 
        if (time == 20) {
            clearInterval(timer)
        }
        console.log(`score: ${score}`) 
        console.log(`{ name: ${k.name}, belt: ${k.belt} }`)   
    }, 1000) 
}
fight(amy)

//20504

let names2 = ['apples', 'bananas', 'bread', 'cookies', 'broccoli', 'onions']
let prices = [20, 12, 24, 53, 32, 15]
let discounts = [0, 0, 10, 25, 0, 5]

class Product {
    constructor (name, price) {
        this.name = name
        this.price = price
    }
    applyDiscount(discount) { 
        this.price = this.price - (this.price * discount)/100    
    }
}

class Receipt {
    constructor(products) {
        this.products = products
    }
    calcTotal() {
        let reducer = (acc, product) => {
            return acc + product.price
        }
        // we set the accumulators initial value to 0
        return this.products.reduce(reducer, 0)
    }
}

let getReceipt = (names, prices, discounts) => {
    let products = names.map((name, index) => {
        return new Product(name, prices[index])
    }) 
    //console.log(products)

    products.map((product, index) => {
        return product.applyDiscount(discounts[index])
    })
    console.log(products)

    let receipt = new Receipt(products)
    let total = receipt.calcTotal() 

    
    console.log(receipt)
    console.log(`Total: ${total}`)
}

getReceipt(names2, prices, discounts)

//Haven't finish the advance receipt yet





