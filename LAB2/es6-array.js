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

//itteration
let text ="";
for(value of rname){
    text += value +":";
}
console.log(text);

const numbers = [10,20,30]
numbers.forEach(addNum);

function addNum(value,index,array) {
    console.log (value+2); 
}

const ns = numbers.map(addNumMap);
console.log(ns);
function addNumMap(value){
    return value * 2;
}

const over10 = numbers.filter(over10fn);
console.log(over10);
function over10fn(value) {
    return value > 10;
}

const reOver10 = numbers.reduce(over10fn);
console.log(reOver10);

const everOver10 = numbers.every(over10fn);
console.log(reOver10);
const someOver10 = numbers.some(over10fn);
console.log(someOver10);

let resFind = numbers.find(over10fn);
console.log(someOver10);
let resFindIndex = numbers.indexOf(over10fn);
console.log(resFindIndex);

let alphad = Array.from("ABCDefg0123");
console.log(alphad);