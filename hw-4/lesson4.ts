// C массивом данных пользователей users сделать следующий
// задачи, используя map/reduce вместо for, forEach:
//
// 1. Получить строку с именами и фамилиями всех пользователей через
// запятую.
// 2. Создать массив из emails по алфавиту.
// 3. Создать новый массив пользователей, где объект пользователя должен
// содержать только id и поле, отвечающее за имя пользователя(например
// username), которое должно содержать имя и фамилию.
// 4. Создать массив юзеров, где они отсортированы по возрасту по
// возрастанию и все пользователи младше 40 лет.
// 5. Получить объект, где были бы
// a) данные о среднем возрасте пользователей
// b) количество пользователей старше 30
// c) количество пользователей старше 40
// d) количество пользователей старше 18
// 6. Создать объект, где ключ, это первая буква фамилии, а значение -
// массив из фамилий пользователей начинающихся на эту букву. Объект
// должен состоять только из ключей существующих фамилий в этом
// массиве. Например в этом массиве нет фамилии с буквой Y, а значит и
// такого поля не должно быть в объекте. Пример того, что надо получить,
// когда пользователи имеют следующие фамилии Snow, Felton , Ford, Ferdinand:
// { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }

interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
  age: number
}

const users: User[] = [
  {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg",
      "age": 23
  },
  {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg",
      "age": 20
  },
  {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg",
      "age": 40
  },
  {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg",
      "age": 36
  },
  {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg",
      "age": 70
  },
  {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg",
      "age": 45
  }
]

// 1. Получить строку с именами и фамилиями всех пользователей через
// запятую.
function getStringUsers (users: User[]): string {
  return users
  .map(( { first_name, last_name}) => first_name + ' ' + last_name)
  .join(', ')
}
console.log(getStringUsers(users))

// 2. Создать массив из emails по алфавиту
function getArrayEmails (users: User[]): any {
  return users
  .map(({ email }) => email)
  .sort()
}
console.log(getArrayEmails(users))

// 3. Создать новый массив пользователей, где объект пользователя должен
// содержать только id и поле, отвечающее за имя пользователя(например
// username), которое должно содержать имя и фамилию.

interface Obj {
  id:number
  username: string
}

function getNewArrayObjects (users: User[]): Obj[] {
  return users.map(({ id, first_name, last_name }): Obj => {
      return {
      id: id,
      username: first_name + ' ' + last_name
    }
  })
}
console.log(getNewArrayObjects(users))

// 4. Создать массив юзеров, где они отсортированы по возрасту по
// возрастанию и все пользователи младше 40 лет.

const minAge = 40

function getArraySortAge (users: User[]): User[] {
  return users.filter(({ age }) => age <= minAge).sort((a, b) => a.age - b.age)
}
console.log(getArraySortAge(users))

// 5. Получить объект, где были бы
// a) данные о среднем возрасте пользователей
// b) количество пользователей старше 30
// c) количество пользователей старше 40
// d) количество пользователей старше 18

interface ObjectFive {
  [propName:string] : number
}

const taskNumber = [18, 30, 40]

function getObjectAverageAge (users: User[]): ObjectFive {
  return {
   averageAge: users.reduce((acc, { age }) => acc + age, 0) / users.length,
   userOldThirty: users.filter(({ age }) => age >= taskNumber[1]).length,
   userOldFourty: users.filter(({ age }) => age >= taskNumber[2]).length,
   userOldEighteen: users.filter(({ age }) => age >= taskNumber[0]).length,
  }
}
console.log(getObjectAverageAge(users))


// 6. Создать объект, где ключ, это первая буква фамилии, а значение -
// массив из фамилий пользователей начинающихся на эту букву. Объект
// должен состоять только из ключей существующих фамилий в этом
// массиве. Например в этом массиве нет фамилии с буквой Y, а значит и
// такого поля не должно быть в объекте. Пример того, что надо получить,
// когда пользователи имеют следующие фамилии Snow, Felton , Ford, Ferdinand:
// { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }

interface ObjectSix {
  [propName:string] : string
}

function getObjectLastName (users: User[]): ObjectSix {
  const arrLetter = new Set(users.filter(({ last_name }: User) => last_name).map(({ last_name }) => last_name[0]))
  const mapLetter = new Map()
  for ( let letter of [...arrLetter]) {
    mapLetter.set(letter, users.map(({ last_name }) => last_name).filter(item => item.includes(letter)))
  }
  return Object.fromEntries(mapLetter)
}
console.log(getObjectLastName(users))