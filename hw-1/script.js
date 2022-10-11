//--------------Lesson 1--------------
const users = [
  {
    id: 1,
    username: 'Michael Lawson',
    age: 22,
  },
  {
    id: 2,
    username: 'Tom Spot',
    age: 32,
  },
  {
    id: 3,
    username: 'Kate Ford',
    age: 18,
  },
]

//--------Найти средний возраст----------
function summAge(arr) {
  if (arr.length <= 0) return
  const arrage = arr.map(item => item.age)
  const average = arrage.reduce((acc, item) => acc + item, 0) / arrage.length
  // console.log(average)
  return average
}
summAge(users)

// ---------Сортировка по возрасту----------
function sortUser(arr) {
  if (arr.length <= 0) return
  const sort = arr.sort((a, b) => a.age - b.age)
  // console.log(sort)
  return sort
}
sortUser(users)

// -----------Поиск пользователя--------------
function findUser(arr) {
  if (arr.length <= 0) return
  const user = arr.find(item => item.age == 22)
  // console.log(user)
  return findUser
}
findUser(users)

// ------------Extra #1--------------
const string = 'Welcome to this Javascript Guide!'
// -------------Поменять направление букв-------------
const reverseString = string?.split('').reverse().join('')

// -------------Поменять направление слов--------------
const reverseWord = string?.split(' ').reverse().join(' ')

// ------------#2 Сумма чисел массива------------------

const matrix = [[1, 2], [3, 2], [5, 6, 2], [4]]
const summMatrix = matrix?.flat().reduce((acc, item) => acc + item)
// console.log(summMatrix)

//----------------HomeWork------------------------
const subjects = {
  biology: {
    students: 120,
    teachers: 6,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  mathematics: {
    students: 200,
    teachers: 6,
  },
}

//-----------------Создать строку из названий предметов-----------------
function getString(obj) {
  if (Object.keys(obj).length <= 0) return
  let stringSubject = ''
  for (let item in obj) {
    stringSubject += item + ' '
  }
  // console.log(stringSubject)
  return stringSubject
}
getString(subjects)

//------------Посчитать общее число студентов и учителей-------------
function calcPeople(obj) {
  let counter = 0
  if (Object.keys(obj).length <= 0) return
  for (let item in obj) {
    for (let key in obj[item]) {
      counter += obj[item][key]
    }
  }
  // console.log(counter)
  return counter
}
calcPeople(subjects)

//----------Посчитать среднее число студентов на предмете------------
function calcAverageIntStudents(obj) {
  if (Object.keys(obj).length <= 0) return
  let count = Object.keys(obj).length
  let summStudents = 0
  for (let item in obj) {
    summStudents += obj[item].students
  }
  // console.log(summStudents / count)
  return summStudents / count
}
calcAverageIntStudents(subjects)

//--------------Создать массив из обьектов subjects---------------
const arrSubject = Object.entries(subjects)
// console.log(arrSubject)

function getArrSubjects(obj) {
  if (Object.keys(obj).length <= 0) return
  const arrSubj = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arrSubj.push(obj[key])
    }
  }
  // console.log(arrSubj)
  return arrSubj
}
getArrSubjects(subjects)

//-------------Отсортировать массив по кол-ву преподавателей от > к < -------------
const subj = getArrSubjects(subjects)
subj.sort((a, b) => b.teachers - a.teachers)
// console.log(subj)
