function f1(cb) {
    console.log(b)
    console.log("typeof b:", typeof b)

    cb()
    return "java Technocrat"
}

f1 (sayHello)

function sayHello(){
    console.log("Hello everyone!!, Good Morning!")
}

f1(sayHello) //undefined => because -sayHello retrns nothing