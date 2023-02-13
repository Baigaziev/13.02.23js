// напишите фукнцию которое выводит сумму трех чисел
function printSum(a, b, c) {
  console.log(a + b + c);
}
printSum(10, 20, 50);

// Написать функцию котороая возвращает обьем прямоугольника

function rectangularPrismVolume(length, width, height) {
  return length * width * height;
}

console.log(rectangularPrismVolume(10, 9, 8))
  

// которая считает от 10 до 20 числа

function sumFrom10To20() {
  let sum = 0;
  for (let i = 10; i <= 20; i++) {
    sum += i;
  }
  return sum;
}
let result = sumFrom10To20();
console.log(result); 

// дается массив из строк и нужно вывезти строки с большими буквами


let strings = ["Hello", "WORLD", "Goodbye", "js"];
let result1 = getUppercaseStrings(strings);
console.log(result1); 

function getUppercaseStrings(arr) {
  return arr.filter(function(str) {
    return str === str.toUpperCase();
  });
}

// дается массив из 5 элементов чисел  задача вывести сумму массив

let numbers = [1, 2, 3, 4, 5];
let result2 = sumArray(numbers);
console.log(result); 

function sumArray(arr) {
  return arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
}

// создать цикл который делит этот массив четным и не четным

let numbe = [1, 2, 3, 4, 5];
let result3 = sumEvenOdd(numbers);
console.log(result); 

function sumEvenOdd(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  return { evenSum, oddSum };
}



// Задача по Js: сделайте задачу с Fizz Bizz 


function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(25);

// НОВАЯ ШТУЧКА НАСЧЕТ МАССИВОВ
