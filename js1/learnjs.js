// const studentScores = [['Alpha', 100], ['Betty', 75], ['Gamma', 50]]

// console.log(studentScores[0][0]) // Alpha
// console.log(studentScores[0][1]) // 100

let cars = ['Toyota', 'Volvo', 'BMW']
'Toyota' in cars // false (specify the index number instead of value)
console.log(0 in cars) // true
let merekMobil = 4 in cars
4 in cars // false (does not existz)
// console.log('length' in cars); // true  (length is an Array property)

console.log('length = ' + cars.length);

//======================================
let firstName = 'linda'
let lastName = 'Sinta'
console.log(`Nama awal ${firstName} nama  tengah ${lastName}`);


if (firstName === 'Elinda') {
  console.log(`Selamat datang ${firstName}`);
} else if (!merekMobil) {
  console.log(merekMobil);
}
//==========================

// let age = prompt('Masukan umur');
// let accessAllowed = age > 20 ? true : false;
// let accessAllowed =
//     age < 3
//         ? 'Boleh dengan syarat'
//         : age < 25
//             ? 'boleh'
//             : age < 30
//                 ? 'sangat boleh'
//                 : 'tidak boleh';
// console.log(accessAllowed);

//==========================
const name = 'budi'

switch (name) {
  case 'sarah':
    console.log('Hallo Sarah');
    break;
  case 'budi':
    console.log('Hallo Budi');
    break;
  default:
    console.log('siapa namamu?');
}

//===========================

const nameA = 'Alpha'
const nameB = 'Beta'
const nameCompared = nameA === nameB

console.log(nameA)
console.log(nameB)
console.log(nameCompared)
//===========================
const ageA = 18
const ageB = 25

if (ageA > ageB) {
  console.log('umur A lebih besar')
} else if (ageA < ageB) {
  console.log('umur B lebih besar')
} else {
  console.log('umur sama')
}
//===============================

const personA = {
  name: 'Alpha',
  age: 40
}

const personB = {
  name: 'Betty',
  age: 40
}

switch (personA.age > personB.age) {
  case true:
    console.log(personA.name + ' lebih tua')
    break

  case false:
    console.log(`${personB.name} lebih tua atau keduanya seumur`)
    break

  default:
    console.log('...')
}

//==========================================

switch (true) {
  case personA.age === personB.age:
    console.log('seumur');

    break;

  default:
    break;
}

//======================================
console.log('==============================');


const rectangleWidth = 100
const rectangleLength = 20

const rectangleArea = rectangleWidth * rectangleLength

console.log(`${rectangleArea} = ${rectangleWidth} * ${rectangleLength}`)
//======================================

const human = {
  jobs: [{ firstYear: 2011, role: 'mentor' }, 'pilot', 'chef'],
}

console.log(human.jobs[0].role);
console.log(human.jobs[0]['role']);
console.log('=================================');



const biodata = {
  name: "Laila Ali",
  age: 20,
  collage: "University of Indonesia",
  hobbies: ["swimming", "running", ["hiking", ["shopping", "traveling"]], "sleeping"],
  address: {
    street: "Kemang Raya",
    province: "Jakarta Selatan",
    country: "Indonesia"
  },
  contact: {
    email: "laila@ali.com",
    phone: {
      countryCode: 021,
      number: [13123, 7968]
    }
  },
  skills: {
    language: ["English", "French", "Indonesia"],
    programming: [{ language: "JavaScript", framework: "React.js" }, "Java", "C++"]
  }
}

// Write your code down below
console.log(`Hai, my name is ${biodata.name}, I studied in ${biodata.collage}.
My programming skills are ${biodata.skills.programming[0].language} including using its framework ${biodata.skills.programming[0].framework} ${biodata.skills.programming[1]} and ${biodata.skills.programming[2]}.
My hobbies are ${biodata.hobbies[3]} and also ${biodata.hobbies[2][1][0]}.
Right now I live at ${biodata.address.street}, ${biodata.address.province} - ${biodata.address.country}.
You can reach me on my email ${biodata.contact.email} or my phone ${biodata.contact.phone.countryCode}-${biodata.contact.phone.number}.
Thank you and have a nice day.`)
console.log(`=============================`);

/*
Create application that could print to the console:
'Excellent', if score is HIGHER THAN 80
'Good Job' if score is IN THE RANGE OF 60  UNTIL 80 (60 and 80 is included)
'Don't give up' if score is BELOW 60


You can use: 
- switch case statement
- if / else statement
- ternary operator
*/
// let score = prompt('Masukkan nilai komputer Anda')
let score = 59

let computerScore =
  score < 60
    ? 'Dont give up '
    : score <= 80
      ? 'Good Job'
      : score > 80
        ? 'Excellent'
        : 'Input score';

console.log(computerScore);

console.log('=================================');

if (score < 60) {
  console.log(`Don't give up
  tetap berusaha`);
} else if (score <= 80) {
  console.log(`Good Job`);
} else if (score > 80) {
  console.log(`Excellent`);
} else {
  console.log(`Input Score`);
}

switch (true) {
  case score < 60:
    console.log(`Don't give up \n tetap berusaha`);
    break;
  case score >= 60 && score <= 80:
    console.log(`Good Job`);
    break;
  case score > 80:
    console.log(`Excellent`);
  default:
    console.log(`Input Score`);
}

console.log('================================');
// DO WHILE
let iteration = 0
do {
  console.log(iteration)
  iteration += 6
} while (iteration < 20)

console.log('================================');
// FOR

for (let index = 0; index <= 20; index += 6) {
  console.log(index)
}

console.log('================================');

const numbers = [2, 3, 5, 7]
console.log(numbers.length);

for (let index = 0; index < numbers.length; index++) {
  const indexValue = numbers[index]
  console.log(indexValue)
}
console.log('================================');
// WHILE

let num = 0;
while (num < 5) {
  console.log(num);
  num++
}
console.log('================================');
// FOR
for (let index = 0; index < 5; index++) {
  console.log(index);
}
console.log('================================');
// FACTORIAL 
let inputNumber = 8
let fact = 1
for (let i = 1; i <= inputNumber; i++) {
  fact *= i;
}
console.log(fact)
// CARA LAIN
let inputFactorial = 4
for (i = inputFactorial-1; i >= 1; i--) {
  inputFactorial *= i
}
console.log(inputFactorial);

console.log('=======================');

let inputName = 'haekal'
let reversedName = '';
console.log(inputName.length);

for (let i = inputName.length-1; i >= 0; i--) {
  reversedName += inputName[i];
}
console.log(reversedName);

console.log('===========================')
// REVERSE NAME
function reverseString(inputName) {
  let balikNama = "";
  for (let i = inputName.length - 1; i >= 0; i--) {
    balikNama += inputName[i];
  }
  return balikNama;
}
console.log(reverseString('haekal'));
console.log('===========================')
