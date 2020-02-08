
/*
Write an if else statement that prints true if the variable 'number' has value 5 in it and print false if it doesn't

Example:

input: 700
output: false

input: 555
output: true

input: 2
output: false
*/

let number = 76
// Write your code down below!
let string = number.toString()
let output = true

for (let i = 0; i < string.length; i++) {
    if (string[i] !== '5') {
        output = false;
    }
}
console.log(output);
//==========================

// let input = 3
// let icon = '*'

// for (let i = 0; i < input; i++) {
//     console.log(`${icon}`);
// }
//===========================


var intendedRow = 3;
var row = 0;

while (row < intendedRow) {
    console.log('*');
    row++;
}
console.log('============================');

var rows2 = 5;
var i = 0;

while (i < rows2) {
    var asteriks = '*';
    var j = 1;
    while (j < rows2) {
        asteriks = asteriks + '*';
        j++;
    }
    console.log(asteriks);
    i++;
}
console.log('============================');
let inputNumber = 3

for (let row = 0; row < inputNumber; row++) {
    let character = '';

    for (let col = 0; col < inputNumber; col++) {
        character += '*';   
    }
    console.log(character);
}
console.log('============================');
let numberString = '700'
let result = false
for (let i = 0; i < numberString.length; i++) {
    result = string[i] === '5'

    if (result) break;
}
console.log(result);
console.log('============================');





// var i, j;
// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= i; j++) {
//         console.log('*');
//     }
//     console.log('\n');
// }





