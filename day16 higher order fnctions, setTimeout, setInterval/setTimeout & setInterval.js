console.log(1)

setTimeout(hello, 2000)

function hello(){
    console.log("hello everyone!!")
}
console.log(3)


//  link =>latentflip.com  --find the website

// set interval is cleared with clearTimeout
// setInterval(hello, 2000)
// 5
// 18setTimeout & setInterval.js:6 hello everyone!!
// clearInterval(5)
// undefined
// setInterval(hello, 2000)
// 6
// 5setTimeout & setInterval.js:6 hello everyone!!
// clearTimeout(6)
// undefined