"use strict";
// Define the show_magicians function
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Array of magician names
const magicianNames = ["Alice", "David", "Chris"];
// Call the show_magicians function with the array of magician names
console.log("Magicians:");
show_magicians(magicianNames);
