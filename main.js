
// console.log(" ШАГ 5: Циклы \n");
// console.log(" 5.2. Цикл for ");
// for (let i = 1; i <= 5; i++) {
//     console.log(`Итерация ${i}`);
// }
// console.log("\n 5.3. Практическое задание №1 ");


// console.log("Числа от 1 до 10:");
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// console.log("\nЧётные числа от 1 до 10:");
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(`\nСумма чисел от 1 до 10: ${sum}`);


// console.log("\n--- 5.4. Цикл while ---");
// let count = 0;
// while (count < 3) {
//     console.log(`while: count = ${count}`);
//     count++;
// }


// console.log("\n 5.5. Практическое задание №2 ");
// let number = 5;
// console.log("Обратный отсчёт:");
// while (number > 0) {
//     console.log(number);
//     number--;
// }
// console.log("Старт!");


// console.log("\n 5.6. Цикл do...while ");
// let x = 0;
// do {
//     console.log(`do...while: x = ${x}`);
//     x++;
// } while (x < 3);

// console.log("\n 5.7. break и continue ");


// console.log("Пример break (остановка на 3):");
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) break;
//     console.log(i);
// }


// console.log("\nПример continue (пропуск 3):");
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }


// console.log("\n 5.8. Практическое задание №4 ");
// console.log("Числа от 1 до 10 (пропуск 5, остановка на 8):");
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) continue;
//     if (i === 8) break;
//     console.log(i);
// }


// console.log("\n5.9. Вложенные циклы ");
// console.log("Таблица умножения (2x2):");
// for (let i = 1; i <= 2; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }
// console.log("\n 5.10. Практическое задание №5 ");
// console.log("Пирамида из звёздочек:");
// for (let i = 1; i <= 4; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//         stars += "*";
//     }
//     console.log(stars);
// }
// ============================================
// ШАГ 6. Функции в JavaScript
// ============================================

console.log("\n\nШАГ 6: Функции\n");


console.log(" Объявление функции ");
function greet(name) {
    return `Привет, ${name}!`;
}
console.log(greet("Иван"));
console.log(greet("Мария"));


console.log("\n Практическое задание №1 ");
function multiply(a, b) {
    return a * b;
}
console.log(`5 * 3 = ${multiply(5, 3)}`);
console.log(`10 * 7 = ${multiply(10, 7)}`);


console.log("\n--- 6.4. Функция без return ---");
function sayHello() {
    console.log("Привет из функции!");
}
sayHello();


console.log("\ Практическое задание №2 ");
function printInfo(name, age) {
    console.log(`Имя: ${name}, Возраст: ${age}`);
}
printInfo("Алексей", 25);
printInfo("Елена", 30);


console.log("\n6.6. Параметры по умолчанию ");
function greetUser(name = "Гость") {
    console.log(`Добро пожаловать, ${name}!`);
}
greetUser();
greetUser("Иван");


console.log("\n Практическое задание №3 ");
function calculateDiscount(price, discount = 10) {
    const finalPrice = price - (price * discount / 100);
    return finalPrice;
}
console.log(`Цена 1000₽ со скидкой 10%: ${calculateDiscount(1000)}₽`);
console.log(`Цена 1000₽ со скидкой 20%: ${calculateDiscount(1000, 20)}₽`);


console.log("\n Функции как значения ");
const add = function(a, b) {
    return a + b;
};
console.log(`add(5, 3) = ${add(5, 3)}`);

// Замыкание (closure)
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(`counter() = ${counter()}`);
console.log(`counter() = ${counter()}`);
console.log(`counter() = ${counter()}`);


console.log("\nСтрелочные функции");


function addOld(a, b) {
    return a + b;
}


const addNew = (a, b) => a + b;

console.log(`addOld(5, 3) = ${addOld(5, 3)}`);
console.log(`addNew(5, 3) = ${addNew(5, 3)}`);


const double = x => x * 2;
console.log(`double(5) = ${double(5)}`);


const getRandom = () => Math.floor(Math.random() * 100);
console.log(`getRandom() = ${getRandom()}`);


const calculateArea = (width, height) => {
    const area = width * height;
    return `Площадь: ${area}`;
};
console.log(calculateArea(5, 3));