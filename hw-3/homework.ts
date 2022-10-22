//? С ниже приведенным массивом решить следующие задачи:
// 1. Все функции и данные должны быть протипизированы
interface User {
    name: string
    phone: string
    email: string
    animals?: string[]
    cars?: string[]
    hasChildren: boolean
    hasEducation: boolean
}

const users: User[] = [
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
]

// 2. Создать строку из имен пользователей через запятую
function getStringName ( users: User[] ): string {
    return users.map(item => item.name)
        .join(', ')
}
console.log(getStringName(users))

// 3. Посчитать общее количнство машин у пользователей
function getTotalCars ( users: User[] ): number {
    return users.filter(item => item.cars)
        .reduce(( acc: number, item: any ) => acc + item.cars.length, 0)
}
console.log(getTotalCars(users))

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
function getFiterHasAducation ( users: User[] ): User[] {
    return users.filter(( item: User ) => item.hasEducation)
}
console.log(getFiterHasAducation(users))

// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
function getFilterHasAnimals ( users: User[] ): User[] {
    return users.filter(({ animals }) => animals)
}
console.log(getFilterHasAnimals(users))

// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую
function getStringCars (users: User[]): string {
    return users.filter(({ cars }) => cars)
        .map(({ cars }) => cars)
            .flat()
                .join(', ')
}
console.log(getStringCars(users))