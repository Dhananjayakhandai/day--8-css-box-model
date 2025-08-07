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
// const str = 'JavaScript'

// console.log(str[4])//S
// console.log(str.charCodeAt(4))

// const str1 =str.concat(' is fun!')
// console.log(str, "->", str1)

// console.log(str.includes('a')) //true
// const letter = 'A'
// console.log(str.includes(letter.toLowerCase())) //false
// console.log(str.includes('script'))

// console.log(str.indexOf('a', 2))
// console.log(str.lastIndexOf('a'))

// const replacedString = str.replace("a","k")
// console.log(str, "->", replacedString)

// const replacedAllStr = str.replaceAll("a", "k")
// console.log(str,"->", replacedAllStr)

// console.log(str.repeat(3))

// console.log('5'.padStart(3,'0'))
// console.log(str.padStart(14, "@"))

// console.log('5'.padEnd(3,'0'))
// console.log(str.padEnd(14, "@"))

// const fruitsstr = 'apple , banana, cherry, mango'
// const fruitsArr = fruitsstr.split(',')
// console.log(fruitsstr, fruitsArr)

// const s = 'we are developers'
// console.log(s.length)

// console.log(s.slice())
// console.log(s.substring()) //it is used for extracting a substring

// console.log(s.slice(10))
// console.log(s.substring(10))

// console.log(s.slice(-9))
// console.log(s.substring(-9)) //-9 => 0

// console.log(s.slice(17)) //empty string
// console.log(s.substring(17)) //empty

// console.log(s.slice(11, 13)) //lo
// console.log(s.substring(11, 13)) //lo

// console.log(s.slice(13, 11)) //empty =>"" //if (start>end) =>""
// console.log(s.substring(13, 11)) // if( start> end) ->swap =>substring(11, 13)

// console.log(s.slice(-6, -2)) //lope
// console.log(s.substring(-6, -2)) //empty =>""

// console.log(s.slice(-6, 2)) // slice(11, 2) => empty string
// console.log(s.substring(-6, 2)) //substring(0, 2)

// console.log(s.slice(2, -6))
// console.log(s.substring(2, -6)) //substring(2, 0) => substring(0, 2)

// //s.substr //deprecated


const c = 'sabyasachi sahoo'
console.log(c.length)

// console.log(c.slice(10, 15))
// console.log(c.slice(3,5))
// VM1017:1 ya
// undefined
// console.log(c.slice(5,3))
// VM1091:1 
// undefined
// console.log(c.slice(12,5))
// VM1143:1 
// undefined
// console.log(c.slice(-5,7))
// VM1295:1 
// undefined
// console.log(c.slice(5,-7))
// VM1354:1 sach
// undefined
// console.log(c.slice(-7, 5))
// VM1490:1 
// undefined
// console.log(c.slice(7, -5))
// VM1546:1 chi 
// undefined
// console.log(c.slice(-7, -5))
// VM1603:1 i 
// undefined
// console.log(c.slice(-7, -5))
// VM1633:1 i 
// undefined
// console.log(c.substring(4,8))
// VM1797:1 asac
// undefined
// console.log(c.substring(8, 4))
// VM1889:1 asac
// undefined
// console.log(c.substring(-8, 4))
// VM1990:1 saby
// undefined
// console.log(c.substring(8, -4))
// VM2057:1 sabyasac
// undefined
// console.log(c.substring(4, -8))
// VM2155:1 saby
// undefined
// console.log(c.substring(-4, 8))
// VM2200:1 sabyasac
// undefined
// console.log(c.substring(-4, -8))
// VM2423:1 
// undefined
// console.log(c.substr(5,10))
// VM2529:1 sachi saho
// undefined
// console.log(c.substr(2,7))
// VM2627:1 byasach
// undefined
// console.log(c.substr(4,12))
// VM2694:1 asachi sahoo
// undefined
// console.log(c.substr(2,7))
// VM2748:1 byasach
// undefined
// console.log(c.substr(2,6))
// VM2800:1 byasac
// undefined
// console.log(c.substr(2,9))
// VM2825:1 byasachi 
// undefined
// console.log(c.substr(2,10))
// VM2848:1 byasachi s
// undefined
// console.log(c.substr(2,15))
// VM2879:1 byasachi sahoo
// undefined
// console.log(c.substr(2,13))
// VM2904:1 byasachi saho
// undefined
// console.log(c.substr(2,14))
// VM2926:1 byasachi sahoo
// undefined
// console.log(c.substr(4,13))
// VM2987:1 asachi sahoo
// undefined
// console.log(c.substr(-4,13))
// VM3044:1 ahoo
// undefined
// console.log(c.substr(4,-13))
// VM3107:1 
// undefined
// console.log(c.substr(4,-2))
// VM3136:1 
// undefined
// console.log(c.substr(-2, 4))
// VM3179:1 oo
// undefined
// console.log(c.substr(2, -4))
// VM3234:1 
// undefined
// console.log(c.substr(-2, -4))
// VM3260:1 
// undefined
// console.log(c.substr(5, 12))
// VM3316:1 sachi sahoo
// undefined
// console.log(c.substr(-5, 12))
// VM3346:1 sahoo
// undefined
// console.log(c.substr(5, -12))
// VM3399:1 
// undefined
// console.log(c.substr(-5, -12))
// VM3420:1 
// undefined
// console.log(c.substr(12, -5))
// VM3544:1 
// undefined
// console.log(c.substr(-12, 5))
// VM3686:1 asach
// undefined
// console.log(c.substr(-13, 5))
// VM4869:1 yasac
// undefined
// substr