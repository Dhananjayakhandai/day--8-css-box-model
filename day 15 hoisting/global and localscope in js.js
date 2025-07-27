let x = 10;
const y =20 

var a = 120

function f1 (){
    let b = 220

    console.log("within function x", x)
    console.log("within function b", b)
}
f1()
    console.log("otside function x", x)
    console.log("outside function b", b)
    //local scope can be access with in the function//outside function it is global