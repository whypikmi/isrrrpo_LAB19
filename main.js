/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let s = 0;
for (let i = 1; i < 11; i++) {
    s += i;
    console.log(s);
}

let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}

let number = 5;
while (number >= 0) {
    console.log(number);
    number -= 1;
}

let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while (doValue < 3);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
    if (i == 8) {
        break;
    }
}

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

for (let i = 1; i <= 4; i++) {
    let c = "";
    for (let j = 1; j <= i; j++) {
        c += "*";
    }
    console.log(c);
}

function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 2));

function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Тимофей");

function printInfo(name, age) {
    console.log(`Привет, я ${name} и мне ${age}`);
}
printInfo("Liza", 18);

function greet(name = "Гость") {
    console.log("Привет, " + name);
}
greet();
greet("Анастасия");

function calculateDiscount(price, sale = 10) {
    return price - (price * sale / 100);
}
console.log(calculateDiscount(1000, 50));

const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));

function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function sumFunc(a, b) {
    return a + b;
}
const sumFunc2 = (a, b) => a + b;
const double = x => x * 2;
const sumFunc3 = (a, b) => a + b;
const sayGreeting = () => console.log("Hello");
const square = x => x * x;
const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
}

console.log(fruits.includes("яблоко"));
console.log(fruits.includes("манго"));
*/

let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);

console.log(numbersArr[0]);
console.log(numbersArr[1]);

let colors = ["red", "orange", "pink"];
console.log(colors[0]);
console.log(colors[2]);
colors[1] = "green";
console.log(colors);

console.log(numbersArr.length);
numbersArr.push(10);
console.log(numbersArr);
numbersArr.pop();
console.log(numbersArr);

let students = [];
students.push("Liza");
students.push("Vanya");
students.push("Nastya");
console.log(students);
students.pop();
console.log(students);

let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}
for (let value of numbers2) {
    console.log(value);
}
let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);
console.log(numbersArr.indexOf(1));
console.log(numbersArr.indexOf(2));

let city = ["Volgograd","Moscow","Perm","Anapa"];
let town = "Moscow";
if(city.includes(town)){
    let ind = city.indexOf(town);
    console.log(`Город ${town} найден на позиции ${ind}`);
}
else{
    console.log("Нет заданного города");
}