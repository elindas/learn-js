
const human = {
    name: "Alpha",

    walk: function () {
        console.log(`${human.name} is walking`);
    },
    run: speed => {
        return (`Run, run, run! ${speed} km/h!`)
    }
}

console.log(human.walk());
console.log(human.run(21));
console.log('===========================');

const user = {
    name: 'Alpha',
    age: 20
}
//set
user['walk fast'] = 'walk in the road'
// get
console.log(user['walk fast'])
// delete
delete user['walk fast']

//paka key
const key = 'walk fast'

user[key] = 'walk walk walk'
console.log(user[key])
console.log(user['walk fast'])
console.log('==================================');
// Membuat Shorthands dg cara buat function
const makePeople = (name, age) => {
    return {
        name,
        age
        // ...other properties
    }
}
const people = makePeople('Budi', 25)
console.log(people.name);
// Membuat shorthands by variable
let suaraKucing = 'meow'
let suaraAnjing = 'gukguk'

let suaraHewan = {
    suaraKucing,
    suaraAnjing
}

console.log(suaraHewan.suaraAnjing);
console.log(suaraHewan);
console.log('=============================');
// THIS
let car = {
    name: "Toyota",
    color: "white",
    // shorthands titik dua dan function dihilangkan
    engineStart() {
        return `${this.name} is on`;
    },
    penjumlahan: function () {
        return 'a+b+c'
    },
    show: function () {
        return this.penjumlahan;
        // return this.penjumlahan();
    }
};

console.log(car.engineStart());
console.log(car.show()());
// console.log(car.show());
console.log('==========================');
// clone dg cara looping
const student = {
    name: 'Andi',
    age: 21
}
const clonedStudent = {}
for (let key in student) {
    clonedStudent[key] = student[key]
}
clonedStudent.name = 'Budi'
console.log(clonedStudent.name);
console.log('===========================');
// destructuring
let orang = {
    nama: 'Mikayla',
    umur: 22,
    sudahMenikah: false
};

// Destrukturisasi Objek
let { nama: namaSiswa, umur: umurSiswa, sudahMenikah } = orang;

console.log(namaSiswa); //output: 'andi'
console.log(umurSiswa); //output: 22
console.log(sudahMenikah); //output: false





