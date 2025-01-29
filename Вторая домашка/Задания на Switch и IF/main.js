function checkNumber() {
    let num = parseFloat(prompt("Введите число:"));
    if (num > 0) alert("Положительное");
    else if (num < 0) alert("Отрицательное");
    else alert("Ноль");
}
function checkAge() {
    let age = parseInt(prompt("Введите возраст:"));
    if (age >= 0 && age <= 120) alert(`Возраст корректный, вам ${age} лет`);
    else alert("Некорректный возраст");
}
function checkTime() {
    let h = parseInt(prompt("Часы:")),
     m = parseInt(prompt("Минуты:")),
     s = parseInt(prompt("Секунды:"));
    if (h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60) alert("Время корректное");
    else alert("Некорректное время");
}
function checkQuadrant() {
    let x = parseFloat(prompt("Введите x:")), 
    y = parseFloat(prompt("Введите y:"));
    if (x > 0 && y > 0) alert("1-я четверть");
    else if (x < 0 && y > 0) alert("2-я четверть");
    else if (x < 0 && y < 0) alert("3-я четверть");
    else if (x > 0 && y < 0) alert("4-я четверть");
    else if (x === 0 && y === 0) alert("Начало координат");
    else alert("На оси");
}
function countPosNeg() {
    let nums = [parseInt(prompt("Введите число 1:")), parseInt(prompt("Введите число 2:")), parseInt(prompt("Введите число 3:"))];
    let pos = nums.filter(n => n > 0).length;
    let neg = nums.filter(n => n < 0).length;
    alert(`Положительных: ${pos}, Отрицательных: ${neg}`);
}

function sumTwoLargest() {
    let nums = [parseFloat(prompt("Введите число 1:")), parseFloat(prompt("Введите число 2:")), parseFloat(prompt("Введите число 3:"))];
    nums.sort((a, b) => b - a);
    alert(`Сумма двух наибольших: ${nums[0] + nums[1]}`);
}

function findFourthVertex() {
    let x1 = parseInt(prompt("x1:")), y1 = parseInt(prompt("y1:")),
        x2 = parseInt(prompt("x2:")), y2 = parseInt(prompt("y2:")),
        x3 = parseInt(prompt("x3:")), y3 = parseInt(prompt("y3:"));
    let x4 = x1 ^ x2 ^ x3, y4 = y1 ^ y2 ^ y3;
    alert(`Четвертая вершина: (${x4}, ${y4})`);
}