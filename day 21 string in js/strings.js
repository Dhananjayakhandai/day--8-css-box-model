// const str = "     Hello world       "

// console.log(str.toUpperCase())
// console.log(str)

// const lowerstr = str.toLowerCase()
// console.log(str, "=>", lowerstr)

// const bothsideTrim = str.trim()
// console.log(str, "=>", bothsideTrim)

// const startTrim = str.trimStart()
// console.log(str, "=>", startTrim)

// const Trimend = str.trim()
// console.log(str, "=>", Trimend)

////////////////////////////////////////////////////////////////////////////////////////////////
const str = 'JavaScript'

console.log(str[4])//S
console.log(str.charCodeAt(4))

const str1 =str.concat(' is fun!')
console.log(str, "->", str1)

console.log(str.includes('a')) //true
const letter = 'A'
console.log(str.includes(letter.toLowerCase())) //false
console.log(str.includes('script'))

console.log(str.indexOf('a', 2))
console.log(str.lastIndexOf('a'))

const replacedString = str.replace("a","k")
console.log(str, "->", replacedString)

const replacedAllStr = str.replaceAll("a", "k")
console.log(str,"->", replacedAllStr)

console.log(str.repeat(3))

console.log('5'.padStart(3,'0'))
console.log(str.padStart(14, "@"))

console.log('5'.padEnd(3,'0'))
console.log(str.padEnd(14, "@"))

const fruitsstr = 'apple , banana, cherry, mango'
const fruitsArr = fruitsstr.split(',')
console.log(fruitsstr, fruitsArr)

const s = 'we are developers'
console.log(s.length)

console.log(s.slice())
console.log(s.substring()) //it is used for extracting a substring

console.log(s.slice(10))
console.log(s.substring(10))

console.log(s.slice(-9))
console.log(s.substring(-9)) //-9 => 0

console.log(s.slice(17)) //empty string
console.log(s.substring(17)) //empty

console.log(s.slice(11, 13)) //lo
console.log(s.substring(11, 13)) //lo

console.log(s.slice(13, 11)) //empty =>"" //if (start>end) =>""
console.log(s.substring(13, 11)) // if( start> end) ->swap =>substring(11, 13)

console.log(s.slice(-6, -2)) //lope
console.log(s.substring(-6, -2)) //empty =>""

console.log(s.slice(-6, 2)) // slice(11, 2) => empty string
console.log(s.substring(-6, 2)) //substring(0, 2)

console.log(s.slice(2, -6))
console.log(s.substring(2, -6)) //substring(2, 0) => substring(0, 2)

//s.substr //deprecated
