// const a = 10;

// const outer = function(){
//     const b = 20;
//     const x = 110;

// const add = function() {
//     console.log("addition is", a + b)
//     }
//    return add;
// }

// const func = outer()
// // console.log('func', func)
// // console.dir(func)
// func()

function f1() {
    let firstname = "ashutosh"
    let lastname = "sahoo"

    function f2(){
        console.log("first name is", firstname)
    }
    return f2;
}

const printName = f1()
printName()