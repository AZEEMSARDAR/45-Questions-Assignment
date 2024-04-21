"use strict";
// Q14 Answer:
let guests = ["Elon Musk", "Albert Einstein", "Bill Gates"];
guests.forEach(guest => { console.log(`Dear ${guest},  Iam hosting a dinner party and you are invited.`); });
// Q15 Answer:
let unableToAttend = "Elon Musk";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Mark Zuckerberg";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(guest => { console.log(`Dear ${guest}, Iam hosting a dinner party and you are invited.`); });
