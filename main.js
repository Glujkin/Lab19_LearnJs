
console.log(" ШАГ 5: Циклы \n");
console.log(" 5.2. Цикл for ");
for (let i = 1; i <= 5; i++) {
    console.log(`Итерация ${i}`);
}
console.log("\n 5.3. Практическое задание №1 ");


console.log("Числа от 1 до 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("\nЧётные числа от 1 до 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`\nСумма чисел от 1 до 10: ${sum}`);


console.log("\n--- 5.4. Цикл while ---");
let count = 0;
while (count < 3) {
    console.log(`while: count = ${count}`);
    count++;
}


console.log("\n 5.5. Практическое задание №2 ");
let number = 5;
console.log("Обратный отсчёт:");
while (number > 0) {
    console.log(number);
    number--;
}
console.log("Старт!");


console.log("\n 5.6. Цикл do...while ");
let x = 0;
do {
    console.log(`do...while: x = ${x}`);
    x++;
} while (x < 3);

console.log("\n 5.7. break и continue ");


console.log("Пример break (остановка на 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}


console.log("\nПример continue (пропуск 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}


console.log("\n 5.8. Практическое задание №4 ");
console.log("Числа от 1 до 10 (пропуск 5, остановка на 8):");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log(i);
}


console.log("\n5.9. Вложенные циклы ");
console.log("Таблица умножения (2x2):");
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
console.log("\n 5.10. Практическое задание №5 ");
console.log("Пирамида из звёздочек:");
for (let i = 1; i <= 4; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}