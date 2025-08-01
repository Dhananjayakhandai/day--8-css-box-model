const username = "sai"
// console.log(username)

// username = "sipun"
// console.log(username)

const person = {
    firstName: 'Ankit',

    lastName: ' singh',

    'full-Name': 'Ankit singh',

    age: 23,

    isGraduated: true,

    address: {
        city: 'BBSR',
        pin: 765634,
        isRental: false
    },
}

console.log(person.lastName)
person.lastName = "sahoo"

//person = {} //error => as person is declared  with const

// let person2 = {
//     firstName :'Raj',
//     lastName :'patra'
// }
// person2 = {} //empty object

delete person.lastName
console.log(person)

// delete person.lastname
// true
// person
// {firstName: 'Ankit', full-Name: 'Ankit singh', age: 23, isGraduated: true, address: {…}}
// person.firstName
// 'Ankit'
// delete person.firstname
// true
// delete person.age
// true


// Object.seal(person) it restrict the object, so that  any addtion and deletion of 
// any key can't be possible (still updating key & values are possible) 

Object.freeze(person) //through freeze method, we can't  make any type of operation (except exracting values)inside the object