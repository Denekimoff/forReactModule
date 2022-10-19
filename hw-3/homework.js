// С ниже приведенным массивом решить следующие задачи:
// 1. Все функции и данные должны быть протипизированы
// 2. Создать строку из имен пользователей через запятую
// 3. Посчитать общее количнство машин у пользователей
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую
var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
// 2 Task
var getStringName = function (users) { return users.map(function (item) { return item.name; }).join(','); };
console.log(getStringName(users));
// 3 Task
var getTotalCars = function (users) { return users.filter(function (item) { return item.cars; }).reduce(function (acc, item) { return acc + item.cars.length; }, 0); };
console.log(getTotalCars(users));
// 4 Task
var getFiterHasAducation = function (users) { return users.filter(function (item) { return item.hasEducation; }); };
console.log(getFiterHasAducation(users));
// 5 Task
var getFilterHasAnimals = function (users) { return users.filter(function (_a) {
    var animals = _a.animals;
    return animals;
}); };
console.log(getFilterHasAnimals(users));
// 6 Task
var getStringCars = function (users) { return users.filter(function (_a) {
    var cars = _a.cars;
    return cars;
}).map(function (_a) {
    var cars = _a.cars;
    return cars;
}).flat().join(', '); };
console.log(getStringCars(users));
