// array to string
const data = [1, 2, 3]

console.log(data) // 1,2,3
console.log(String(data) === '1,2,3') // true
console.log(data.toString() === '1,2,3');

// splice (start from, how many)
const words = ['I', 'study', 'JavaScript']
words.splice(1, 1)
// Starting from the index `1`, it removed `1` element.
console.log(words) // ["I", "JavaScript"]
console.log('=====================');
const arrayNumber = [1, 2, 3, 4, 5, 6]

const addition = arrayNumber.reduce((sum, current) => {
    return sum + current / arrayNumber.length;
}, 0);
console.log(addition);
console.log('=====================');
// SORT EVEN AND ODD
// var arr = [5, 2, 7, 9, 2, 3, 8, 4];
let arr = [2, 3, 4, 5, 6]

let hasilnya = arr.sort((a, b) => (a % 2 - b % 2) || (a % 2 ? a - b : b - a))
// let hasilnya = arr.sort((a,b)=> (b%2-a%2) || (a%2 ? b-a : a-b) )
console.log(hasilnya);

console.log('=======================');
// SORT EVEN DESC odd ascend
function sortEvenOdd(arr) {
    let result = arr.sort((a, b) => (a % 2 - b % 2) || (a % 2 ? a - b : b - a));
    return result;
}
console.log(sortEvenOdd([2, 3, 4, 5, 6]));
console.log('======================');
// FOUND THE GOLD
function findGold(gold) {
    let result = []
    for (let i = 0; i < gold.length; i++) {
        if (gold[i] === "gold") {
            result.push(i + 1)
        }
    }

    if (result.length === 0) {
        return 'all of these are junk';
    } else if (result.length === 1) {
        return `Found the gold at position ${result}`
    } else {
        return `Found the gold at position ${result.slice(0, -1)} and ${result.pop()}`
    }
}

let input = ["junk", "hay", "corrosive metal", "cows poop", "gold"]
console.log(findGold(input));
console.log('======================');
// HIGHEST GAP IN BINARY
// function countHighestGap(inputNum) {
//     const binary = inputNum.toString(2)
//     let number1 = [];
//     for (let i = 0; i < binary.length; i++) {
//         if (binary[i] === '1') {
//             number1.push(i)
//         }
//     }

//     let gap = []
//     for (let i = 1; i < number1.length; i++) {
//         gap.push((Math.abs(number1[i] - number1[i - 1])) - 1)
//     }
//     let result = gap.sort()
//     return result.pop()
// }

// console.log(countHighestGap(529));
console.log('======================');
function countHighestGap(inputNum) {
    const binary = inputNum.toString(2)
    let number1 = [];
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            number1.push(i)
        }
    }

    let gap = []
    for (let i = 1; i < number1.length; i++) {
        gap.push((number1[i] - number1[i-1]) - 1)
    }
    
    let result = gap.sort((a, b) => (a-b))
    return result.pop()
}

console.log(countHighestGap(1610612737));
console.log(countHighestGap(9))
console.log(countHighestGap(529));
console.log(countHighestGap(20));
console.log(countHighestGap(15));

console.log(countHighestGap(24));

// cara cari max dalam array
let angkaDaftar = [28, 3, 7, 17]

// let sort = angkaDaftar.sort((a, b) => (a-b))
// console.log(sort);
console.log(Math.max(...angkaDaftar));
console.log(Math.max.apply(Math, angkaDaftar));













