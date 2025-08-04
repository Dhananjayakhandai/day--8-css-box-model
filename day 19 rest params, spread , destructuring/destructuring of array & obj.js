const numbers = [11, 21, 31, 41, 51]

// const a = numbers[0]
// const b = numbers[1]
// console.log(a, b)

// const [a, b, c] = numbersclg
// console.log(a, b, c)

// const [a1, , , ,b1] =numbers
// console.log(a1, b1)

const [, , ,d1, ] =numbers
console.log(d1)

const [a2, b2, ...rest] =numbers
console.log(a2, b2, rest)

const numbers1 = [10, 20]
const [a3, b3, c3 =999] = numbers1
console.log(a3, b3, c3)


/////////////////////////////////////////// Destructuring In Objects//////////////////////////////////////////////////
const employee = {
    id:101,
    name: 'Raj Kumar',
    age:21,
    salary:70000.99,
}

// const {a, b} =employee    
// console.log(a,b)  //undefined , undefined -> there is no key named 'a' &  'b' in the employee object

const {id: employeeId, name, salary,dept:department ='It'} =employee
// console.log(id, name, salary)
console.log(department)

const{age} = employee
console.log(age)


const{id,  ...additionalproperties} =employee
console.log(id, additionalproperties)