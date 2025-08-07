// document.children
// HTMLCollection [html]
// const children = document.children
// undefined
// children
// HTMLCollection [html]
// children.map((el) => console.lo(el))
// VM2624:1 Uncaught TypeError: children.map is not a function
//     at <anonymous>:1:10
// (anonymous) @ VM2624:1
// [NEW] Explain Console errors by using Copilot in Edge: click
         
//          to explain an error. 
//         Learn more
//         Don't show again
// document.children
// HTMLCollection [html]
// document.children[0]
// <html lang=​"en">​scroll<head>​…​</head>​<body style=​"font-family:​ sans-serif">​…​</body>​</html>​
// typeof document
// 'object'
// typeof document.children
// 'object'
// console.dir(document.children([0]))
// VM3225:1 Uncaught TypeError: document.children is not a function
//     at <anonymous>:1:22
// (anonymous) @ VM3225:1
// [NEW] Explain Console errors by using Copilot in Edge: click
         
//          to explain an error. 
//         Learn more
//         Don't show again
// console.dir(document.children[0])

// undefined
// console.dir(document)
// VM3383:1 #document
// undefined
// document.children[0].children[1]
// <body style=​"font-family:​ sans-serif">​…​</body>​
// document.body
// <body style=​"font-family:​ sans-serif">​…​</body>​
// document.body.children
// HTMLCollection(7) [h1, hr, p, img#my-first-image-id.css-image, ul, p, script, my-first-image-id: img#my-first-image-id.css-image]0: h11: hr2: p3: img#my-first-image-id.css-image4: ul5: p6: scriptmy-first-image-id: img#my-first-image-id.css-imagelength: 7[[Prototype]]: HTMLCollection
// document.body.children[0]
// <h1>​Frondend Development​</h1>​
// console.dir document.body.children[0]
// VM4148:1 Uncaught SyntaxError: Unexpected identifier 'document'
// console.dir (document.body.children[0])
// undefined
// document.body.children[0].innerHTML = 'sai'
// 'sai' //DOM MANIPULATION

// document.body.children[0].innerHTML = '<li></li>'