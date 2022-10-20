// Протипизировать данные
// каждый вложенный объект и идентичные повторяющиеся свойста вынести в отдельный type/interface
// для описания полей language и genres используйте литеральные типы и объединение (Пример: type Name = 'John' | 'Anna')

type Previousepisode = {
    "href": "https://api.tvmaze.com/episodes/2117447" | "https://api.tvmaze.com/episodes/64040" | "https://api.tvmaze.com/episodes/2166477"
}

type Self = {
    "href": "https://api.tvmaze.com/shows/5451" | "https://api.tvmaze.com/shows/722" | "https://api.tvmaze.com/shows/57291"
}

type Links = {
    "self": Self
    "previousepisode": Previousepisode
}

type Image = {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/22/55709.jpg" | "https://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg" | "https://static.tvmaze.com/uploads/images/medium_portrait/354/887264.jpg"
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/22/55709.jpg" | "https://static.tvmaze.com/uploads/images/original_untouched/6/15097.jpg" | "https://static.tvmaze.com/uploads/images/original_untouched/354/887264.jpg"
}

type Externals = {
    "tvrage": null | 5820
    "thetvdb": 262042 | 71292 | 409152
    "imdb": "tt2359096" | "tt0088526" | "tt15371940"
}

type Countryy = {
    "name": "Netherlands" | "United States" | "United Kingdom"
    "code": "NL" | "US" | "GB"
    "timezone": "Europe/Amsterdam" | "America/New_York" | "Europe/London"
}

type Network = {
    "id": 112 | 1 | 41
    "name": "RTL4" | "NBC" | "E4"
    "country": Countryy
    "officialSite": null | "https://www.nbc.com/"
}

type Rating = {
    "average": number
}

type Days = "Saturday" | "Tuesday"

type Schedule = {
    "time": "20:00" | "21:00" | ""
    "days": Days[]
}

type Genr = "Comedy" | "Family" | "Romance" | "Drama"

type Show = {
    "id": 5451 | 722 | 57291
    "url": "https://www.tvmaze.com/shows/5451/golden-girls" | "https://www.tvmaze.com/shows/722/the-golden-girls" | "https://www.tvmaze.com/shows/57291/the-holden-girls-mandy-myrtle"
    "name": "Golden Girls" | "The Holden Girls: Mandy & Myrtle" | "The Golden Girls"
    "type": "Scripted"
    "language": "Dutch" | "English"
    "genres": Genr[]
    "status": "Ended" | "Running"
    "runtime": 30 | null
    "averageRuntime": 30 | 32
    "premiered": "2012-08-25" | "1985-09-14" | "2021-09-07"
    "ended": "2012-11-03" | "1992-05-09" | null
    "officialSite": null | "https://www.channel4.com/programmes/the-holden-girls-mandy-myrtle/"
    "schedule": Schedule
    "rating": Rating
    "weight": 78 | 94 | 59
    "network": Network
    "webChannel": null
    "dvdCountry": null
    "externals": Externals
    "image": Image
    "summary": string
    "updated": 1624285127 | 1648572955 | 1632389837
    "_links": Links
}

type Shows = {
    "score": number
    "show": Show
}
const shows: Shows[] = [
    {
        "score": 1.1905451,
        "show": {
            "id": 5451,
            "url": "https://www.tvmaze.com/shows/5451/golden-girls",
            "name": "Golden Girls",
            "type": "Scripted",
            "language": "Dutch",
            "genres": [
                "Comedy",
                "Family",
                "Romance"
            ],
            "status": "Ended",
            "runtime": 30,
            "averageRuntime": 30,
            "premiered": "2012-08-25",
            "ended": "2012-11-03",
            "officialSite": null,
            "schedule": {
                "time": "20:00",
                "days": [
                    "Saturday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 78,
            "network": {
                "id": 112,
                "name": "RTL4",
                "country": {
                    "name": "Netherlands",
                    "code": "NL",
                    "timezone": "Europe/Amsterdam"
                },
                "officialSite": null
            },
            "webChannel": null,
            "dvdCountry": null,
            "externals": {
                "tvrage": null,
                "thetvdb": 262042,
                "imdb": "tt2359096"
            },
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/22/55709.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/22/55709.jpg"
            },
            "summary": "<p>Meet Barbara, Els, Toos &amp; Milly... Together they form the perfect circle of friends and live in their home in Scheveningen. The scripts are based on original American screenplays, but have been rewritten into Dutch and the year 2012.</p>",
            "updated": 1624285127,
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/shows/5451"
                },
                "previousepisode": {
                    "href": "https://api.tvmaze.com/episodes/2117447"
                }
            }
        }
    },
    {
        "score": 1.0154191,
        "show": {
            "id": 722,
            "url": "https://www.tvmaze.com/shows/722/the-golden-girls",
            "name": "The Golden Girls",
            "type": "Scripted",
            "language": "English",
            "genres": [
                "Drama",
                "Comedy"
            ],
            "status": "Ended",
            "runtime": 30,
            "averageRuntime": 30,
            "premiered": "1985-09-14",
            "ended": "1992-05-09",
            "officialSite": null,
            "schedule": {
                "time": "21:00",
                "days": [
                    "Saturday"
                ]
            },
            "rating": {
                "average": 8.4
            },
            "weight": 94,
            "network": {
                "id": 1,
                "name": "NBC",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                },
                "officialSite": "https://www.nbc.com/"
            },
            "webChannel": null,
            "dvdCountry": null,
            "externals": {
                "tvrage": 5820,
                "thetvdb": 71292,
                "imdb": "tt0088526"
            },
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/6/15097.jpg"
            },
            "summary": "<p><b>The Golden Girls</b> follows four South Florida seniors sharing a house, their dreams, and a whole lot of cheesecake. Bright, promiscuous, clueless, and hilarious, these lovely mismatched ladies form the perfect circle of friends.</p>",
            "updated": 1648572955,
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/shows/722"
                },
                "previousepisode": {
                    "href": "https://api.tvmaze.com/episodes/64040"
                }
            }
        }
    },
    {
        "score": 0.5591333,
        "show": {
            "id": 57291,
            "url": "https://www.tvmaze.com/shows/57291/the-holden-girls-mandy-myrtle",
            "name": "The Holden Girls: Mandy & Myrtle",
            "type": "Scripted",
            "language": "English",
            "genres": [
                "Comedy"
            ],
            "status": "Running",
            "runtime": null,
            "averageRuntime": 32,
            "premiered": "2021-09-07",
            "ended": null,
            "officialSite": "https://www.channel4.com/programmes/the-holden-girls-mandy-myrtle/",
            "schedule": {
                "time": "",
                "days": [
                    "Tuesday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 59,
            "network": {
                "id": 41,
                "name": "E4",
                "country": {
                    "name": "United Kingdom",
                    "code": "GB",
                    "timezone": "Europe/London"
                },
                "officialSite": null
            },
            "webChannel": null,
            "dvdCountry": null,
            "externals": {
                "tvrage": null,
                "thetvdb": 409152,
                "imdb": "tt15371940"
            },
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/354/887264.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/354/887264.jpg"
            },
            "summary": "<p>Spoof documentary followiing actress and broadcaster Amanda Holden and her grandmother Myrtle, played by Leigh Francis.</p>",
            "updated": 1632389837,
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/shows/57291"
                },
                "previousepisode": {
                    "href": "https://api.tvmaze.com/episodes/2166477"
                }
            }
        }
    }
]