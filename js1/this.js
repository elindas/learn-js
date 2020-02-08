
// const car = {
//     make: 'Ford',
//     model: 'fiesta',

//     drive() {
//         console.log(`Driving a ${this.maker} ${this.model} car!`);
//     }
// }

// console.log(car.drive());
// This tsb mencari di luar funct drive tapi masih di dalam scope car
// kalau fungsinya di deklarasikan pakai Arrow function==== tidak bisa mem bind di dalam arrow function

// BIND, fungsinya di luar object
// const car = {
//     maker: 'Ford',
//     model: 'Fiesta'
// }

// const drive = function () {
//     console.log(`Driving a ${this.maker} ${this.model} car!`)
// }.bind(car)

// drive()

// BIND ke anotherCar ke Audi bukan ke Ford,
/*
const car = {
    maker: 'Ford',
    model: 'Fiesta',

    drive() {
        console.log(`Driving a ${this.maker} ${this.model} car!`)
    }
}

const anotherCar = {
    maker: 'Audi',
    model: 'A4'
}

car.drive.bind(anotherCar)()
*/
// CALL parameter kedua string/number, APPLY pakai array
const car = {
    maker: 'Ford',
    model: 'Fiesta'
}

const drive = function (kmh) {
    console.log(`Driving a ${this.maker} ${this.model} car at ${kmh} km/h!`)
}

drive.call(car, 100) // Driving a Ford Fiesta car at 100 km/h!

drive.apply(car, [100])

const superCar = {
    maker: 'Lambhorgini',
    model: 'X'
}
drive.bind(superCar)([500, 50])
drive.bind(superCar, [200, 20])()
drive.bind(car, 100)()
// call apply vs bind bedanya kalau tida di execute () maka hasilnya tidak muncul, bind bisa utk digunakan di lain waktu




