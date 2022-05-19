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

// ***************************************

// Arrays

// nested array
let arr = [1,2,3,[4,5,6,[7,8,9]]]
console.log(arr[3][3][1]) // 8

let names = ['aya', 'ali',',mai']
// add at the end of array
names.push('gamal')
console.log(names) // ['aya', 'ali', ',mai', 'gamal']
// add at the first of array
names.unshift('ahmed')
console.log(names) // ['ahmed', 'aya', 'ali', ',mai', 'gamal']

// remove from the first 
names.shift() 
console.log(names) // ['aya', 'ali', ',mai', 'gamal']

// remove from the end
names.pop()
console.log(names) // ['aya', 'ali', ',mai']

// remove item inside array
names.splice(1,1) // splice(start index , number of items , items if want to add)
console.log(names) // ['aya', ',mai']
names.push('gamal')
names.push('ahmed')
console.log(names) // ['aya', ',mai', 'gamal', 'ahmed']

names.splice(2,1 ,'ali') 
console.log(names) //  ['aya', ',mai', 'ali', 'ahmed']

names.splice(1,0 ,'mona') 
console.log(names) //  ['aya', 'mona', ',mai', 'ali', 'ahmed']

// names.slice(0,2) // slice(start,end)
console.log(names.slice(0,2)) // ['aya', 'mona']
console.log(names) //['aya', 'mona', ',mai', 'ali', 'ahmed']

// reverce and sort array
console.log(names.reverse()) // ['ahmed', 'ali', ',mai', 'mona', 'aya']

console.log(names.sort()) // [',mai', 'ahmed', 'ali', 'aya', 'mona']

// concat and join in array
let arr1 = ['ahmed' , 'mona' , 'mazen']
let arr2 = ['aya' , 'mai' , 'ali']

// arr1 = arr1 + arr2
// arr1 += arr2
// console.log(arr1) // ahmed,mona,mazenaya,mai,ali
// console.log(typeof arr1) //string

console.log(arr1.concat(arr2)) // ['ahmed', 'mona', 'mazen', 'aya', 'mai', 'ali']
console.log(arr1.join()) //ahmed,mona,mazen
console.log(arr1.join(' ')) //ahmed mona mazen
console.log(arr1.join('-')) //ahmed-mona-mazen

// *****************************

// == compare values
// === compare values and data types
console.log(5 == '5') //true
console.log(5 === '5') //false


// *****************************
// continue and breake in loops
let users = ['ali' , 'aya' , 'ahmed' , 1,2,3, 'gamal']
for(let i = 0; i< users.length ; i++){
  if(typeof users[i] == 'number'){
    continue; // استبعاد
  }
  console.log(users[i])
  // ali
  // aya
  // ahmed
  // gamal
}
console.log('----------')
for(let i = 0; i< users.length ; i++){
  console.log(users[i])
  if(users[i] == 'ahmed'){
    break; // stop
  }
  // ali
  // aya
  // ahmed
}


// *****************************

//hoisting
console.log(y) // undefined 
var y = 10;

// ------
console.log(hello()) //1

function hello(){
  return 1; //decleration function move to the top of scope
}

let hello = function(){
  return 1; // expresion function  no hoisting
}

