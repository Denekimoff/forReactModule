// Протипизировать данные
// используйте все возможные типы для типизации, включая пользовательские типы

//------- #1 --------
type Faculty = "History department" | "Department of Biology" | "Faculty of Mathematics" | "Faculty of Design"

type Subject = "The World History" | "History of Rome" | "biology" | "chemistry" | "mathematics" | "geometry" | "trigonometry" | "ui" | "ux"|"graphic design"
type Subjects = Subject[]

type Faculties = {
    id: number
    faculty: Faculty
    subjects: Subjects
    countStudents: number
}

const faculties: Faculties[] = [
    {
        id: 1,
        faculty: "History department",
        subjects: ["The World History", "History of Rome"],
        countStudents: 44
    },
    {
        id: 2,
        faculty: "Department of Biology",
        subjects: ["biology", "chemistry"],
        countStudents: 50
    },
    {
        id: 3,
        faculty: "Faculty of Mathematics",
        subjects: ["mathematics", "geometry", "trigonometry"],
        countStudents: 72
    },
    {
        id: 4,
        faculty: "Faculty of Design",
        subjects: ["ui", "ux", "graphic design"],
        countStudents: 37
    }
]

//------- #2 -------
type Title = "Black Widow" | "Harry Potter and the Deathly Hallows: Part 2"

type Year = 2021 | 2011

type Released = "09 Jul 2021" | "15 Jul 2011"

type Genre = "Action" | "Sci-Fi" | "Adventure" | "Adventure" | "Drama" | "Fantasy"
type Genres = Genre[]

type Director = "Cate Shortland" | "David Yates"

type Writer = "Eric Pearson" | "Jac Schaeffer" | "Ned Benson" | "Steve Kloves" | "J.K. Rowling"
type Writers = Writer[]

type Actor = "Scarlett Johansson" | "Florence Pugh" | "David Harbour" | "Daniel Radcliffe" | "Emma Watson" | "Rupert Grint"
type Actors = Actor[]

type Country = "United States" | "United Kingdom"
type Countrys = Country[]

type Poster = "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" | "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"

type Type = "movie"

type Production = "Marvel Studios" | "Heyday Films, Moving Picture Company, Warner Bros."


type Movies = {
    id: number
    title: Title
    year: Year
    released: Released
    runtime: string
    genre: Genres
    director: Director
    writer: Writers
    actors: Actors
    plot: string
    country: Countrys
    poster: Poster
    imdbRating: number
    imdbVotes: number
    type: Type
    boxOffice: string
    production: Production
}

const movies: Movies[] = [
    {
        id: 1,
        title: "Black Widow",
        year: 2021,
        released: "09 Jul 2021",
        runtime: "134 min",
        genre: ["Action", "Sci-Fi", "Adventure"],
        director: "Cate Shortland",
        writer: ["Eric Pearson", "Jac Schaeffer", "Ned Benson"],
        actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        country: ["United States"],
        poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbRating: 6.9,
        imdbVotes: 121932,
        type: "movie",
        boxOffice: "$138,027,361",
        production: "Marvel Studios",
    },
    {
        id: 2,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        released: "15 Jul 2011",
        runtime: "130 min",
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "David Yates",
        writer: ["Steve Kloves", "J.K. Rowling"],
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        country: ["United Kingdom", "United States"],
        poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        imdbRating: 8.1,
        imdbVotes: 790377,
        type: "movie",
        boxOffice: "$381,409,310",
        production: "Heyday Films, Moving Picture Company, Warner Bros.",
    },
]