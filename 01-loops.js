let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name: 'Albert'}, {name: 'Bob'}, {name: 'Claudia'}]
let mix = [5, 'David', {name: 'Ella'}, 23, 'Frank']

//20101
let logeach = (a) => {
    a.forEach((n) => {
        console.log(n)
    })  
}
console.log("logeach")
logeach(numbers)

//20102
let logname = (b) => {
    b.forEach( (s) => {
        console.log(s.name)    
    })
}
console.log("logname")
logname(students)

//20103
let addone = c => c.map(m => m + 1)

console.log("addone")
console.log(addone(numbers))

//20104
let returnname = u => u.map(p => p.name)

console.log("returnname")
console.log(returnname(students))

//20105
let greaterthan22 = (d) => d.filter(g => g >= 22)

console.log("greaterthan22")
console.log(greaterthan22(numbers))

//20106
let returnMorethan = (a, no) => {
    return a.filter(t => t >= no)
}
console.log("returnMorethan")
console.log(returnMorethan(numbers, 70))

//20107
let charactersLong = (a) => {
    return a.filter(b => b.name.length > 6 )
}
console.log("charactersLong")
console.log(charactersLong(students))

//20108
let returnString  = (x) => {
    // filter(f(x) -> Boolean)
    return x.filter(y => typeof y === "string")
}
console.log("returnString")
console.log(returnString(mix))

//20109
let greaterThan100 = (a) => {
    return a.find(b => b > 100)
}
console.log("greaterThan100")
console.log(greaterThan100(numbers))

//20110
let findBob = (b) => {
    return b.find(c => c.name === "Bob")
}
console.log("findBob")
console.log(findBob(students))

//20111
let sumAll = (s) => {
    return s.reduce((acc, i) => acc + i)
}
console.log("sumAll")
console.log(sumAll(numbers))

//20112
let sumwNreduce = (a) => {
    let total = 0 
    a.forEach(x => total += x)
    return total
}
console.log("sumwNreduce")
console.log(sumwNreduce(numbers))

//20113
let differenceN = (b) => {
    return b.reduce((acc, i) => acc - i)
}
console.log("differenceN")
console.log(differenceN(numbers))

//20114
let multiplyP = (v) => {
    return v.reduce((acc, i) => acc * i)
}
console.log("multiplyP")
console.log(multiplyP(numbers))

//20115
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
let sortNumbers = (p) => {
    let n = p.slice() // Copy the array instead of changing the one given as parameter
    return n.sort((a, b) => {
        if (a > b) {
            return -1
        } else if (a < b) {
            return 1
        } else {
            return 0
        }
    })
}
console.log("sortNumbers")
console.log(sortNumbers(numbers))

//20116
let nameLength = (b) => {
    let n = b.slice() // Copy the array instead of changing the one given as parameter
    return n.sort((x, y) => x.name.length - y.name.length)
}

console.log("nameLength")
console.log(nameLength(students))

//20118
let studentsArr = (a) => {
    return a.map((m, index) => {
        m.age = numbers[index]
        return m
    })
}

console.log("studentsArr")
console.log(studentsArr(students))

//20119
let missingNum = [1, 2, 3, 4, 5, 7, 8, 9, 10]
let returnMissingNo = (a) => {
   for (let i = 0; i < a.length ; ++i) { 
       let expected = i + 1
       if (expected != a[i]) {
           return expected
       }               
    }
}
console.log("missingNum")
console.log(returnMissingNo(missingNum))

//20220 
//I had help
let denominations = [10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.01]
let denom = (target) => {
    let owe = target
    let returns = []
    let dispense = () => {
        for (let i = 0; i < denominations.length; i++) {
            let d = denominations[i]
            if (d < owe) {
               returns.push(d)
               owe = owe - d
               return
            }
        }
    }
    // Hack to get around floating point precision in Javascript
    let smallest = denominations[denominations.length -1]
    while (owe > smallest) { // should be owe > 0 but floating point error
        dispense()
        console.log(owe)
    }
    return returns
}

console.log("denom")
// Result still isn't correct because of floating point error
// Correct solution is to use a decimal type but Javascript doesn't have one built in
console.log(denom(27.58))