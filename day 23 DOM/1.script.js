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




// //=====================================08.08.2025============================================================

// console.log(document.getElementsByClassName ('css-image'))

// document.body.children[4].src = 'data:image/jpeg;base64,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'

// document.querySelector('#my-first-image-id')
// document.querySelector('[type = "a"]')
// document.querySelector('ul > li')
// document.querySelectorAll('ul > li')
// document.querySelectorAll('img')


// const allImages = document.querySelectorAll('img')

// const urls = ['data:image/jpeg;base64,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']

// allImages.forEach(image => console.log(image, i))

// allImages.forEach((image ,i) => image.src = urls[i])

// const allImages2 = [ ...allImages]
// allImages2.filter()

//----------------------------------get and set attributes----------------------------------------------//

// document.querySelectorAll('[username]')

// document.querySelectorAll('[username = "sai"]')

// console.dir(document)

// console.dir(document.body)




//-------------------------------------Accessing parentElement, sibiling Element, Children ---------------------------------------------------*

// const firstLink =document.querySelector("body > p:nth-child(5) > a:nth-child(2)")
// undefined
// firstLink.parentElement
// <p>​…​</p>​
// firstLink.parentElement.parentElement
// <body style=​"font-family:​ sans-serif">​…​</body>​
// firstLink.parentElement.parentElement.parentElement
// <html lang=​"en">​scroll<head>​…​</head>​<body style=​"font-family:​ sans-serif">​…​</body>​</html>​
// firstLink.parentElement.parentElement.parentElement.parentElement
// null
// firstLink.children
// HTMLCollection []
// firstLink.childNodes
// NodeList [text]0: textlength: 1[[Prototype]]: NodeList
// const firstLink =document.querySelector("body > p:nth-child(5) > a:nth-child(2)")
// undefined
// firstLink.childNodes
// NodeList [text]
// firstLink.nextElementSibling
// <a target=​"_blank" href=​"https:​/​/​en.wikipedia.org/​wiki/​HTML">​HTML​</a>​
// firstLink.nextElementSibling.nextElementSibling
// <a target=​"_blank" href=​"https:​/​/​en.wikipedia.org/​wiki/​CSS">​CSS​</a>​
// firstLink.nextElementSibling.nextElementSibling.nextElementSibling
// <a target=​"_blank" href=​"https:​/​/​en.wikipedia.org/​wiki/​JavaScript">​JavaScript​</a>​
// const cssLink = firstLink.nextElementSibling.nextElementSibling.nextElementSibling
// undefined
// cssLink
// <a target=​"_blank" href=​"https:​/​/​en.wikipedia.org/​wiki/​JavaScript">​JavaScript​</a>​
// cssLink.previousElementSibling
// <a target=​"_blank" href=​"https:​/​/​en.wikipedia.org/​wiki/​CSS">​CSS​</a>​
// cssLink.previousElementSibling.previousElementSibling
// <a target=​"_blank" href=​"https:​/​/​en.wikipedia.org/​wiki/​HTML">​HTML​</a>​
