

// ==========================102.Функции=======================

// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.

function sayHello(name) {
    return ` Hello ${name}`;
}

console.log(sayHello("My lovely curator"));

// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел.Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

let numbers = [0, 5, 10, 15, 20, 25, 30]

function sumNumber(array, item) {
    for (let i = 0; i < array.length; i++)
        if (array[i] > 10) {
            console.log(array[i])
        }
}
console.log(sumNumber(numbers))

// 3) Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора.

function calculator(num1, num2, operator) {
    if (operator === "plus") {
        return num1 + num2;
    } else if (operator === "minus") {
        return num1 - num2;
    } else if (operator === "multiply") {
        return num1 * num2;
    } else if (operator === "divide") {
        if (num2 === 0) {
            return "Ошибка: деление на ноль!";
        }
        return num1 / num2;
    } else {
        return "Неизвестная операция!";
    }
}

const result1 = calculator(2, 50, "plus");
const result2 = calculator(7, 2, "minus");
const result3 = calculator(2, 2, "multiply");
const result4 = calculator(6, 2, "divide");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


// ==========================103-104.Объекты=======================

// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).

const informaton = {
    name: 'Alexey',
    age: 5,
    location: 'Moscow',
    isAdmin: false
}

console.log(informaton)


// 2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const hello = {
    sayHello: function (name) {
        return 'Hello ' + name
    }
}

console.log(hello.sayHello("Skebob"))



// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

const users = [
    { name: 'Vsevolod', isAdmin: true},
    { name: 'Danya', isAdmin: true},
    { name: 'Alex', isAdmin: false},
    { name: 'Maxim', isAdmin: true},
    { name: 'Vladimir', isAdmin: false},
    { name: 'Sergey', isAdmin: false}
];

let simpleUsersCount = 0

for(let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUsersCount++;
    }
}
    console.log("Число простых пользователей:", simpleUsersCount++)