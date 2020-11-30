
let GOT = {
    Title: "Game of Thrones",
    Duration: 98,
    Genre: "Fantasy",
    Created: "David Benioff",
    Language: "English",
}

// while loop



/* The forEach method seems cleaner, less item (no variable i or cont)*/
for (const [key, value] of Object.entries(GOT)) {
    console.log(`${key} => ${value}`)

};