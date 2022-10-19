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

interface Users {
  name: string
  phone: string
  email: string
  animals?: string[]
  cars?: string[]
  hasChildren: boolean
  hasEducation: boolean
}

const users: Users[] = [
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

// 2 Task
const getStringName = (users: Users[]): string => users.map(item => item.name).join(',')
console.log(getStringName(users))

// 3 Task
const getTotalCars = (users: Users[]): number => users.filter(item => item.cars).reduce((acc: number, item: any) => acc + item.cars.length, 0)
console.log(getTotalCars(users))

// 4 Task
const getFiterHasAducation = (users: Users[]): Array<Users> => users.filter( (item: Users) => item.hasEducation)
console.log(getFiterHasAducation(users))

// 5 Task
const getFilterHasAnimals = (users: Users[]): Array<Users> => users.filter( ({ animals }) => animals)
console.log(getFilterHasAnimals(users))

// 6 Task
const getStringCars = (users: Users[]): string => users.filter(({ cars }) => cars).map(({ cars }) => cars).flat().join(', ')
console.log(getStringCars(users))