function repeatHash() {
    let n = parseInt(prompt("Введите количество #:"));
    let output = "";
    let i = 0;
    while (i < n) {
        output += "#";
        i++;
    }
    alert(output);
}

function countDown() {
    let n = parseInt(prompt("Введите число:"));
    let output = "";
    while (n >= 0) {
        output += n + " ";
        n--;
    }
    alert(output);
}

function power() {
    let num = parseFloat(prompt("Введите число:"));
    let exp = parseInt(prompt("Введите степень:"));
    let result = 1;
    let i = 0;
    while (i < exp) {
        result *= num;
        i++;
    }
    alert("Результат: " + result);
}

function isPowerOfThree() {
    let n = parseInt(prompt("Введите число:"));
    while (n > 1 && n % 3 === 0) {
        n /= 3;
    }
    alert(n === 1 ? "TRUE" : "FALSE");
}

function findPowerOfTwo() {
    let n = parseInt(prompt("Введите число:"));
    let k = 0;
    while (n > 1) {
        n /= 2;
        k++;
    }
    alert("Показатель степени: " + k);
}

function findCommonDivisors() {
    let a = parseInt(prompt("Введите первое число:"));
    let b = parseInt(prompt("Введите второе число:"));
    let i = 1;
    let divisors = "";
    while (i <= Math.min(a, b)) {
        if (a % i === 0 && b % i === 0) divisors += i + " ";
        i++;
    }
    alert("Общие делители: " + divisors);
}

function reverseDigits() {
    let n = parseInt(prompt("Введите число:"));
    let output = "";
    while (n > 0) {
        output += (n % 10) + " ";
        n = Math.floor(n / 10);
    }
    alert(output);
}

function solveEquation() {
    let answer;
    do {
        answer = parseInt(prompt("Решите: 2 + 2 * 2 = ?"));
    } while (answer !== 6);
    alert("Верно!");
}

function divideUntil50() {
    let n = 1000, count = 0;
    do {
        n /= 2;
        count++;
    } while (n >= 50);
    alert("Число: " + n + ", Делений: " + count);
}
function multiplesOfNumber() {
    let num = parseInt(prompt("Введите число:"));
    let result = "";
    for (let i = 1; i <= 100; i++) {
        if (i % num === 0) result += i + " ";
    }
    alert(result);
}

function productSequence() {
    let n = parseInt(prompt("Введите число N (>0):"));
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= 1 + i / 10;
    }
    alert("Произведение: " + product);
}

function isPrime() {
    let num = parseInt(prompt("Введите число:"));
    let isPrime = num > 1;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    alert(isPrime ? "Число простое" : "Число не является простым");
}

function approximateSin() {
    let x = parseFloat(prompt("Введите X:"));
    let n = parseInt(prompt("Введите N (>0):"));
    let result = 0;
    for (let i = 0; i < n; i++) {
        let term = Math.pow(x, 2 * i + 1) / factorial(2 * i + 1);
        result += (i % 2 === 0 ? 1 : -1) * term;
    }
    alert("Приближенное значение sin(X): " + result);
}

function approximateCos() {
    let x = parseFloat(prompt("Введите X:"));
    let n = parseInt(prompt("Введите N (>0):"));
    let result = 0;
    for (let i = 0; i < n; i++) {
        let term = Math.pow(x, 2 * i) / factorial(2 * i);
        result += (i % 2 === 0 ? 1 : -1) * term;
    }
    alert("Приближенное значение cos(X): " + result);
}
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}