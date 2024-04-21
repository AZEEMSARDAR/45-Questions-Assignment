// Define the function to create a sandwich
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

// Call the function three times with different number of arguments
make_sandwich("ham", "cheese");
make_sandwich("Peanut Butter", "Jelly", "Banana");
make_sandwich("Cheese", "Tomato", "Lettuce");
