const s1 = "Raj"
const s2 = "Amit"
const s3 = "chandan"

// const students =['raj', 'Amit','chandan', 10, nan, null, undefined]
// console.log(students)
// console.log(students.length)

// const fruits = new Array(3)
// console.log(fruits)

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3])//undefined

// for (let i = 0;i< students.length; i++) {
//     console.log(students[i])
// }

// students[8] = "Dhananjaya"
// console.log(students)

// students[20] = "Rakesh"
// console.log(students)

// students[ students.length] = "Raja"

// students.push("sai")
// console.log(students)

// const removedStudent  = students.pop()
// console.log(removedStudent)

//==============================================================================================
// const fruits = ['apple','banana','mango']
// console.log(fruits)

// fruits.unshift('orange')
// fruits.pop()

// fruits.unshift('orange')
//fruits.shift()
// apple
//fruits.shift()
// banana
//fruits.shift()
// mango

// fruits.unshift => adds the element from the Front
// fruits.shift => remove the element from the Front

// const isMangoIncluded = fruits.includes('mango')
// console.log(isMangoIncluded)
// const isDateIncluded = fruits.includes('dates')
// console.log(isDateIncluded)

// const morefruits = ['pineapple', 'grapes']
// const addfruits = fruits.concat


// fruits.reverse()
// console.log(fruits)


//slice() => returns a new array,
// const morefruits = ['apple','banana','mango','grapes','litchi']
// let slicedfruits = morefruits.slice()
// let slicedfruits = morefruits.slice(2)
// let slicedfruits = morefruits.slice(2,3) //ending index is not include
// console.log('morefruits', morefruits)
// console.log('slicedfruits', slicedfruits)

//splice() => it deletes the elements in the original array and returns the deleted elements in a new array
// const splicedFruits = morefruits.splice()
// const splicedFruits = morefruits.splice(2,3 ,"Dates",'gauava')
// console.log('morefruits', splicedFruits)
// console.log('splicedfruits', splicedFruits)

//sort()
// morefruits.sort()
// console.log('sort', morefruits)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// forEach()
// Map()
// Filter()
//reduce()
// every()
//some()

const months = ['january', 'february', 'march', 'april']
// const printMonth = function (value, idx) {
//     console.log("month", value, idx)
// }
// const printMonth =(value, idx)=>{
//     console.log("month", value, idx)
// }
// months.forEach((value, idx) => {
//     console.log("month", value, idx)
// })
//     console.log("month", value, index, arr)
// }
// function printMonth(value, index){
//         console.log("month", value, index)
//  }

// difference between map and forEach

// const month1 = months.map((value, idx) => {
//     console.log("month", value, idx)

//     return true + ":" + idx
// })

// const month2 = months.forEach((value, idx) => {
//     console.log("month", value, idx)
// })

// console.log(month1) //we can except an array -cause map() returns ana array
// console.log(month2) // it will be undefined -cause forEach() returns nothing


// const filteredMonths = months.filter(month => {
//     console.log("month: " + month)

//     return month.toLowerCase.includes('M')
// })
// console.log("filteredMonths", filteredMonths)

// const students = [
//     { name: 'soumya', roll: 25 },
//     { name: 'rakesh', roll: 17 },
//     { name: 'bishal', roll: 24 },

// ]
// const rollsGreaterthan18 = students.filter(student => {
//     return student.roll >= 18
// })
// const rollsGreaterthan18 = students.filter(student => student.roll >=18)
// console.log(rollsGreaterthan18)


//reduce(callback function, intial )
// const nums = [10, 20, 30, 40, 50, 60]
// nums.reduce((accumulator, current, idx, arr) => {
//     console.log(accumulator, current, idx)

//     // return true + ":" +idx
// }, 0)
// const sum = nums.reduce((acc, current)=acc + current)
// console.log('result: ', result) //result value depends upon the last value of accumalator
// console.log('sum' , sum)

//some()
const numbers = [2, 4, 6, 8, 10]
const numbers1 = [11, 13]

const issomeevens = numbers.some(num => num % 2 == 0)
console.log(issomeevens)

// issomeevens = numbers1.some(num => num % 2 == 0)
// console.log(issomeevens)

// issomeodds = numbers1.some(num => num % 2 !== 0)
// console.log(issomeodds)


//every()
let isEveryOdds =numbers.every(num =>num % 2 !==0)
console.log(isEveryOdds)