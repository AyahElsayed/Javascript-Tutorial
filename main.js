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
