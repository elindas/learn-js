//decrement
let input = 5

for (let row = 0; row < input; row++) {
    var bintang = ''

    for (let col = row; col < input; col++) {
        bintang += '*'
    }
    console.log(bintang);
}

console.log('==========================');
// incerement
let numIcon = 5

for (let row = numIcon; row > 0; row--) {
    var bintang = '*'

    for (let col = row; col < numIcon; col++) {
        bintang += '*'
    }
    console.log(bintang);
}
console.log('==========================');
// INCREMENT
let total = 5
for (let row = total; row > 0; row--) {
    let bintang = 1
    let hasil = ''

    for (let col = row; col <= total; col++) {
        hasil += String(bintang++)
    }

    console.log(hasil);
}
console.log('==========================');
// decrement
let inputTotal = 5

for (let row = 0; row < inputTotal; row++) {
    var bintang = 1
    let hasil = ''

    for (let col = row; col < inputTotal; col++) {
        hasil += String(bintang++)
    }
    console.log(hasil);
}
console.log('==========================');
// decrement start from total
let totalNum = 5

for (let row = 0; row < totalNum; row++) {
    let bintang = totalNum
    let hasil = ''

    for (let col = row; col < totalNum; col++) {
        hasil += String(bintang--)
    }
    console.log(hasil);
}
console.log('==========================');
// increment different each row
let totNumber = 5

for (let row = 1; row <= totNumber; row++) {
    let bintang = row
    let hasil = ''

    for (let col = row; col <= totNumber; col++) {
        hasil += String(bintang++)
    }
    console.log(hasil);
}
console.log('==========================');
// increment different each row
let rowColumn = 5

for (let row = 0; row < rowColumn; row++) {

    let hasil = ''

    for (let col = row; col < totalNum; col++) {
        let bintang = totalNum - col
        hasil += String(bintang--)
    }
    console.log(hasil);
}
console.log('==========================');

let user = 3


for (let i = 0; i < user; i++) {
    let asterix =''
    for (let j = 0; j < user; j++) {
            asterix += '*'
    }
    console.log(asterix)
}
console.log('==========================');
