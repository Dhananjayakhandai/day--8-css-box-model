// <const, let> <variable_name> = function (){}
// <const, let> <variable_name> = (list of params) => {//body}

// const sayHello = fullname=> {
//     console.log(fullname, "says, Good morning everyone !!")
// }
// const sayHello = (fullname, lastname = "lastname") => {
//     console.log(fullname,lastname, "says, Good morning everyone !!")
// }

const sayHello = fullname => console.log(fullname, "says, Good morning everyone !!"); console.log("hello")

sayHello()
sayHello("sai", "pranab")

// let num = 2
// let square = num **2
// console.log(square)

// const square = n =>console.log(n*n)
// square(3) // => - it means array token

const square = num => num * num
console.log(square(5))
console.log(square(3))
