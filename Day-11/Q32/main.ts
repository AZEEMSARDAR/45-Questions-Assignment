let current_users: string[] = ["user1", "admin", "user2", "user3", "user4"];
let new_users: string[] = ["user1", "user5", "admin", "user6", "user7"];

new_users.forEach((newUser) => {
    if (current_users.some(current_User => current_User.toLowerCase()=== newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a newusername.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});