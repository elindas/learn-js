// MERGE ARRAY
// let angka = [1, 2, 3, 4]
// let number = [5, 6]

// let gabung = [...angka, ...number]
// console.log(gabung);

// let children = angka.concat(number);
// console.log(children);

function largerstNumber(arr1, arr2) {
    let merge = [...arr1, ...arr2]
    return Math.max(...merge)
}

console.log(largerstNumber([1, 4, 5, 8, 10, 20, 50], [1, 3, 57, 38, 10, 74, 90]));
console.log(largerstNumber([8, 58, 70, 30, 80, 120, 40], [5, 60, 70, 89, 100, 102]));
console.log('=============================================');

// function showScore(input) {
//     let score = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
//     let result = []

//     for (let i = 0; i < score.length; i++) {
//         if (input.includes(score[i])) {
//             result.push(i)
//         }
//     }
//     console.log(result);
//     return result
// }

// console.log(showScore("The score team is five three"));
console.log('================================');
let buah = [1, 2, 3];

let [satu, dua, tiga] = [1, 2, 3];

console.log(satu); // output: 'mangga'
console.log(dua); // ouput: 'pisang'
// console.log(empat == null); //

// lowercase
// function showScore(input) {
//     // let inputSplit= input.split(' ')
//     let [zero, one, two, three, four, five, six, seven, eight, nine] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//     console.log(input)




// }

// showScore("three")


// contoh split
// let input = "The score team is five three"
// let output= input.split(' ')
// console.log(output);
// console.log(output[1]);
// function contohDestruktur(input) {
//     let [zero, one, two, three, four, five, six, seven, eight, nine] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//     let result = console.log(['input'])
//     return result
// }

// sOAL SCORE HURUF JADI ANGKA DALAM KALIMAT, AKSES KEY DALAM OBJECT
/*
function makeScore(input) {
    let inputSplit = input.toLowerCase().split(' ')

    let score = {
        zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9
    }

    let result = []
    for (let i = 0; i < inputSplit.length; i++) {
        if (score[inputSplit[i]] !== undefined) {
            result.push(score[inputSplit[i]])
        }
    }
    return result
}

console.log(makeScore("The score team is five three"));
console.log(makeScore("Ladies and gentlemen, here we got eight eight for this time, so tight right?"));
console.log('===============================');
*/

var asiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
asiaTime = new Date(asiaTime);
console.log('Asia Tokyo time: ' + asiaTime.toLocaleString())
console.log('=================');
//FIND DIFFERENT BETWEEN 2 TIMEZONE
function countDiffTime(city) {
    
    let asiaTime = new Date().toLocaleString("en-US", { timeZone: city });
    asiaTime = new Date(asiaTime);
    // return 'Asia Tokyo time: ' + asiaTime.toLocaleString()

    dt1 = new Date();
    dt2 = new Date(asiaTime);

    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60
    let minutesDiff = Math.abs(Math.round(diff))

    return `Jakarta time: ${new Date().toLocaleString()}\n${city} time: ${asiaTime.toLocaleString()}
Difference : ${minutesDiff} minutes`
}

console.log(countDiffTime("Asia/Tokyo"));
console.log(countDiffTime("Europe/Paris"))
console.log(countDiffTime("Pacific/Honolulu"))
console.log(countDiffTime("Indian/Maldives"))






