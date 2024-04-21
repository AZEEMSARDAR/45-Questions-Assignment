"use strict";
// Define the show_magicians function
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Define the make_great function
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
// Array of magician names
let magicians = ["Alice", "David", "chris"];
// Call make_great to modify the array of magicians
make_great(magicians);
// Call show_magicians to see the modified list
console.log("Great Magicians:");
show_magicians(magicians);
