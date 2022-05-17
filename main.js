// convert strings to numbers

console.log('5' + '4') // 54 conct
console.log('5' - '4') // 1
console.log('5' * '4') // 20
console.log('5' / '4') // 1.25
console.log('5' ** '4') // 625

console.log('5' / 'ahmed') // Nan / convert ahmed to number

console.log(  +'5' +  +'4'  ) // 9 / when add + before the number 
// js convert conct to add


console.log( typeof +'5') // number

console.log(+'4') // 4 number
console.log(+'4 Aya') // NaN
console.log(parseInt('4 Aya')) //4 
console.log(parseInt('ghg 4 Aya')) //NaN
console.log(parseInt('4.5')) //4
console.log(parseFloat('4.5')) //4.5

// ***************************************

// convert numbers to strings
console.log(typeof String(10)) //string
// console.log(typeof 100.toString()) //error
console.log(typeof (100).toString()) //string
console.log(typeof 100..toString()) //string

// ***************************************
// strings
let name = 'ali'
console.log(name.repeat(2)) // aliali
console.log(name.length) // 3

console.log(name[2]) // i
console.log(name.charAt(2)) //i

console.log(name[10]) // undefined
console.log(name.charAt(10)) // no output

console.log(name.indexOf('l')) //1

let x = 'I love javaScript'
console.log(x.slice()) //I love javaScript
console.log(x.slice(2)) // love javaScript
console.log(x.slice(0,4)) //I lo

console.log(x.split()) // ['I love javaScript']
console.log(x.split('')) // ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'j', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
console.log(x.split(' ')) // ['I', 'love', 'javaScript']
console.log(x.split(' ', 2)) // ['I', 'love']

// *************
// cut stings 
console.log(x.slice()) //I love javaScript
console.log(x.substring()) //I love javaScript
console.log(x.substr()) //I love javaScript

console.log(x.slice(2,6)) //love
console.log(x.substring(2,6)) //love
console.log(x.substr(2,6)) //love j

console.log(x.indexOf('a',9)) //10
console.log(x.indexOf('z',9)) //-1 not found
console.log(x.lastIndexOf('a',9)) //8
console.log(x.lastIndexOf('z',9)) //-1 not found
console.log(x.includes('a',9)) //true

