function A() {
    let x = 10;
    console.log(x)

    function B() {  //inner function
        const y = 20;
        console.log(y)
        console.log(x) //this line trigger a closure


        function C() {
            const z = 30;
            console.log(z)
            console.log(y) //trigger closure (B)
            console.log(x) // trigger closure(A)
        }
    }

}
B() //it is not define d as it is local for function A

const a = "hello everyone"
console.log(a)

A()
console.log("Program ended")

//=================================================================================