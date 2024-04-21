// let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

// usernames.forEach((username) => {
//   if (username === "admin") {
//     console.log("Hello admin would you like to see a status report?");
//   } else {
//     console.log(`Hello ${username}, thankyou for logging in again`);
//   }
// });


let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];
if (usernames.length === 0) {
  console.log("we need to find some users!");
} else {
  console.log(`Hello ${usernames} thankyou for logging in again`);
}