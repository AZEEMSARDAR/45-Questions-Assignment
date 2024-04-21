// Define the show_magicians function
function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician names
const magicianNames: string[] = ["Alice", "David", "Chris"];

// Call the show_magicians function with the array of magician names
console.log("Magicians:");

show_magicians(magicianNames);

