
function evenOdd(array) {
    const result = []
    array.forEach(number => {
        number % 2 === 0 ? result.unshift(number) : result.push(number)
    })

    return result
}
console.log(evenOdd([2, 3, 4, 5, 6]));
console.log(evenOdd([2, 1, 3, 5, 7, 8]));
console.log(evenOdd([2, 1, 3, 9, 7, 8]));
// belum ascending descending karena tdk di sort


function findGold(array) {
    let arrayLower = array.map(item => {
        return item.toLowerCase()
    })

    let position = []
    let resultGold = 'Found the gold at position'

    if (arrayLower.includes('gold')) {
        for (let i = 0; i < arrayLower.length; i++) {
            if (arrayLower == 'gold') {
                position.push(i)
            }
        }


        for (let j = 0; j < position.length; j++) {
            if (position.length > 1) {
                if (j == position.length - 1) {
                    resultGold += `and ${position[j] + 1}.`
                } else {
                    resultGold += `${position[j] + 1}, `
                }
            } else {
                resultGold += `${position[j] + 1}`
            }
        } return resultGold
    } else {
        return 'all of these are junks'
    }
}

console.log(findGold(["junk", "hay", "corrosive metal", "cows poop", "gold", 'gold', 'nikel']));

let chek = []

console.log(chek.length);




function findGold(gold) {
    let result = []
    for (let i = 0; i < gold.length; i++) {
        if (gold[i] === "gold") {
            result.push(i + 1)
        }
    }

    if (result.length === 0) {
        return `All of these are junk`;
    } else if (result.length === 1) {
        return `Found the gold at position ${result}`
    } else {
        return `Found the gold at position ${result.slice(0, -1)} and ${result.pop()}`
    }
}

console.log(findGold(["junk", "hay", "corrosive metal", "cows poop", "gold"]));
console.log(findGold(["junk", "hay", "corrosive metal", "cows poop", "gold", "gold"]));
console.log(findGold(["junk", "hay", "corrosive metal", "cows poop", "gold", "gold", "gold"]))
console.log(findGold(["gold", "junk", "hay", "corrosive metal", "cows poop"]));
