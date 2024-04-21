// Define the make_album function
function make_album(artist: string, title: string, tracks?: number) {
  let album: { artist: string, title: string, tracks?: number } = { artist, title };
  if (tracks) {
      album.tracks = tracks;
  }
  return album;
}

// Define the make_great function
function make_great(magicians: string[]) {

  // Create a copy of the original array to avoid modifying it directly
  let greatMagicians = [...magicians];
  
  // Add "the Great" to each magician's name
  greatMagicians = greatMagicians.map(magician => magician + " the Great");
  return greatMagicians;
}

// Define the show_magicians function
function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
      console.log(magician);
  }
}

// Original array of magician names
const magiciansOriginal = ["ALice", "David", "Chris"];


// Call make_great with a copy of the original array
const magiciansGreat = make_great([...magiciansOriginal]);


// Show the original array of magician names
console.log("Original Magicians:");
show_magicians(magiciansOriginal);


// Show the array with "the Great" added to each magician's name
console.log("\nMagicians with 'the Great':");
show_magicians(magiciansGreat);
