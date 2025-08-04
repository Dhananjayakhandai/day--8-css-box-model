const students =['raj', 'amit', 'ajit', 'ankit']

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log('============================================================================')

// for(const students of students){
//     console.log(students)
// }

// const user ='sai'
// for (const letter of user) {
//     console.log(letter)
// }

const person = {
    firstName: 'sahil',
    lastName: 'patra',
    age :22,
    city: 'BBSR'
}

// for (const key of person){
//     console.log(key)
// }

// for (const key in person){
//     console.log(key, typeof key, person.key[key])
// }

const personkeys = object.keys(person)
console.log(personkeys)
for (const key of personkeys) {
    console.log(person[key])
}

const personvalues = object.values(person)
console.log(personvalues)
for (const value of personvalues) {
    console.log(value)
}

const personEntries = object.entries(person)
console.log(personEntries)
for (const keyvalueArr of personEntries) {
    console.log(keyvalueArr)
    for (const element of keyvalueArr) {
        console.log(element)
    }
}

console.log('=============================================================================')
for (const [key, value] of personEntries){
    console.log(key, '->', value)
}