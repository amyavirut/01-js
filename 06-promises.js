// 020601
let brushTeeth = () => {
  // Return a Promise, which is an Object that we can "wait" for.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('ready') // `resolve()` returns the value from the promise
                       // this value can then be consumed by `then()`
    }, 1000)
  })
}

let getUp = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve('awake')

    }, 1000)
  })
}

let haveBreakfast  = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve('eaten')

    }, 2000)
  })
}

let haveShower = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve('showered')

    }, 2000)
  })
}

// `then` takes a function as a parameter which recieves the value
// that the promise `resolved` to as it's parameter, which is 'ready' in this case
getUp().then(awake => {
  console.log(awake)
  return haveShower()
}).then(showered => {
  console.log(showered)
  return haveBreakfast()
}).then(eaten => {
  console.log(eaten)
  return brushTeeth()
}).then(ready => console.log(ready))


//020602
let makeCoffee = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve('coffee')

    }, 10000)
  })
}

let makeEggs = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve('eggs')

    }, 5000)
  })
}

let makeToast = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve('toast')

    }, 6000)
  })
}

let makeBacon = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve('bacon')

    }, 8000)
  })
}

Promise.all([makeCoffee(), makeEggs(), makeToast(), makeBacon()])
.then(responses => {console.log(`Breakfast is ready: [${responses}]`)})

  
//020603
let hSpeedy = new Promise ((resolve) => {
  setTimeout(() => resolve('Speedy'), Math.random() * 4)
})

let hJackpot = new Promise ((resolve) => {
  setTimeout (() => resolve('Jackpot'), Math.random() * 4)
})

let hRed = new Promise ((resolve) => {
  setTimeout (() => resolve('Red'), Math.random() * 4)
})

Promise.race([hSpeedy, hJackpot, hRed]).then(response => console.log(`The winner is ${response}!`)
)
