// function in a variable
let hasil1 = function (angka1, angka2) {

    let jumlah = angka1 + angka2
    return jumlah
}

console.log(hasil1(1, 2));
///================
// arrow

const add = (number1, number2) => {
    let result = number1 + number2;
    return result
};
console.log((add(2, 3)));
// CALLBACK FUNCTION

function createQuote(quote, callback) {
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
}

function logQuote(quote) {
    console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1

// function hoisting
// urutan baca code dibalik
// tidak jalan kalau functionnya dimasukkan ke sebuah variable
console.log(substract(3, 2));

function substract(number1, number2) {
    let result = number1 - number2
    return result
}
console.log('====================');

function palindrome(kata) {
    var hasil = '';
    for (var i = kata.length - 1; i >= 0; i--) {
        hasil += kata[i]
    }
    if (hasil === kata) {
        return `This is ${kata} is palindrome`
    } else if (hasil !== kata) {
        return hasil
    }

}
console.log(palindrome('saya mau makan'));
console.log(palindrome('makam'));

console.log('====================');

function removeSpace(sentence) {
    let result = ''

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] != ' ') {
            result += sentence[i]
        } else if (sentence[i] === ' ') {
            continue;
        }
    }

    return result
}
console.log(removeSpace('saya mau makan'))












