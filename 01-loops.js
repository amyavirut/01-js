let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name: 'Albert'}, {name: 'Bob'}, {name: 'Claudia'}]
let mix = [5, 'David', {name: 'Ella'}, 23, 'Frank']

//20101
let logeach = (a) => {
    a.forEach( (n) => {
    console.log(n)
    } )  
}
logeach(numbers)

//20102
let logname = (b) => {
    b.forEach( (s) => {
    console.log(s.name)    
    } ) 

}
logname(students)


//20103
// numbers.map(numbers + 1) => {


