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

for (let i = 0;i< students.length; i++) {
    console.log(students[i])
}

students[8] = "Dhananjaya"
console.log(students)

students[20] = "Rakesh"
console.log(students)

students[ students.length] = "Raja"

students.push("sai")
console.log(students)

const removedStudent  = students.pop()
console.log(removedStudent)

//==============================================================================================
const fruits = ['apple','banana','mango']
console.log(fruits)

// fruits.unshift('orange')
// fruits.pop()

fruits.unshift('orange')
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
