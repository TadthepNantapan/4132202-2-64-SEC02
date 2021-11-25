let cars = ["toyota","honda","Mazda"]
let fruits = []
fruits[0] = "Apple";
fruits[3] = "Mango";
let rname = new Array("Tae","John","Madoka");
console.log(rname);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.unshift("kubuta");
console.log(cars);
cars.shift();
console.log(cars);

cars.splice(1, 0, "Mazda", "Kubota");
console.log(cars);

const carSlide = cars.slice(1, 3);
console.log(carSlide);

const newArr = cars.concat(rname);
console.log(newArr);
const newArr2 = [   cars,   rname];
console.log(newArr2);

console.log(newArr.toString());