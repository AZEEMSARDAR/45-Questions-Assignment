"use strict";
// Store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order.
let places = ["Melbourne", "New York", "Dubai", "Istanbul", "Barcelona"];
console.log("Original order:", places);
// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [...places].sort());
// Show that your array is still in its original order by printing it.
console.log("Original order:", places);
//  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order:", [...places].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Original order:", places);
// Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("reversed order:", places);
// 
places.reverse();
console.log("original order:", places);
//  Reverse the order of your list again. Print the list to show it’s back to its original order.
places.sort();
console.log("Alphabetical order:", places);
// 
places.reverse();
console.log(" Reverse alphabetical order:", places);
