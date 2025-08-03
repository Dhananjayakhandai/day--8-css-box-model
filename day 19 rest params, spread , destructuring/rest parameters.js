// function add(a, b){
//     console.log(a + b)
//     console.log('arguments', arguments)
//     // arguments.forEach(() => console.log("Hello"))
//     console.log(arguments.length)

//     // const add = (a, b) =>//error -as argument keyword is not supported in arrow function
//     for (let i = 0; i < arguments.length; i++) {
//         // const element = arguments[i];
//         sm+= arguments[i]
//     }
//     console.log('sum', sum)
// }

// add(10, 20, 30, 40, 50)


//rest params -> ...args
// const sum = (...args,a , b)=>{
// const sum = (a, b, ...args)=>{
//     console.log("sum of (a + b)", a +b)

//     console.log(args)
//     console.log(args.length)
//     const sum = args.reduce((acc, current) => acc + current)
//     console.log("sum of rest params", sum)
// }
// sum(10, 20, 30, 40, 50)




// function printMessages(...args) {
//     URLSearchParams.forEach(msg => console.log(msg))
// }

// printMessages ('hii', 'hlo', 'byy', 'gya', 'tata', 'khatam')





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// spread & Destructure