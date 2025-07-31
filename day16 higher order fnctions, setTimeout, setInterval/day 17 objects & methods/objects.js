// const user = {

// }

// console.log(user)
// console.log(typeof user)

let username = 'Ankit'
const user = {
    firstName: 'Adarsh',
    lastName: 'singh'

    // 'full-Name' :'Adarsh singh',

    // age :23 

    // isGraduated :true
}

// Get Values
console.log(username)
// console.log(firstName)
console.log(user.firstName)
console.log(user['lastName'])
// extracting the properties of the object through using => (.) or ([''])
// console.log(user['full-Name'])

//UPDATE VALUES

console.log(user.isGraduated)
user.isGraduated = false
console.log(user.isGraduated)
console.log(user)

//ADD VALUES
console.log(user.mobileNumber) //undefined
user.mobileNumber = 7735450244
console.log(user.mobileNumber)


// NESTED OBJECTS
const user2 = {
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
    // function greet() {
    //     console.log("user says Hello")
    // }

    greet: function () {
        console.log('user says Hello')

        // return undefined
    }

    // showNameAndMsg: function(name, msg) {
    // return "Hello" + name + ", your msg is" + msg
    //return => although we havenot return anything but it implicitely returns

    //we do string concatenation using "+" symbol .
    // }


}

console.log(user2)
console.log(user2.address.city)
user2.address.city = "CTC"
console.log(user2.address.city)

console.log(user2.address.city)//undefined
// console.log(user2.greet2())
console.log(user2.greet())

console.log(user2.showNameAndMsg())


