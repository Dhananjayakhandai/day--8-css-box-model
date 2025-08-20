const user = "sai"

//Named Export

// export {user};

function greet() {
    console.log("Hello Everyone!!!!!")
}

// export {user, greet}
export { user, greet as sayHello }
//Default Export
// const name = "sai pranab"
// export default name

function hello() {
    console.log("helooo")
}
export default hello

