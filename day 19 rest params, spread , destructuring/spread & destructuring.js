const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
console.log(...numbers)

const employees = [
    { name: 'raj', age: 24 },
    { name: 'rajesh', age: 25 },
    { name: 'rakesh', age: 26 },
    { name: 'ramesh', age: 28 },
    { name: 'raja', age: 29 },
]
console.log(employees)
console.log(...employees)


const myName = 'sai pranab patra'
console.log(...myName)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr1 = [10, 20, 30, 40]
let arr2 = [];
// const arr2 = arr1

for (let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
}
arr2.push(50)
console.log(arr1)
console.log(arr2)

const arr3 = [10, 20, 30]
const arr4 = [...arr3, ...'Hello']

arr4.push(70)
console.log(arr3)
console.log(arr4)
 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const user = {
    name:'Rakesh Das',
    age:24,
    address:{
        state: 'odisha',
        pin: 764832
    }
}

const copiedUser = {...user, city: 'BBSR'}

// Object.assign()
// console.log(user)
// console.log(copiedUser)


const copyUser = {...user}
copyUser.address.state = "jkd"
console.log(user)
console.log(copyUser)
//shalow cloning
//json.parse(), json.stringify()

//////////////////////////////////////destrcturing in js///////////////////////////////////////////////////////////////