// while loop = repeat some code while condition is true. 

// let username;

// while (username === "" || username === null) {
//   username = window.prompt("Enter your name");
// }

// do {
//   username = window.prompt("Enter your name");
// } while(username === "" || username === null)
// console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Enter your username");
  password = window.prompt("Enter your password");

  if (username === "israeltheodros" && password === "12345678") {
    loggedIn = true;
    console.log("You are logged in");
  }
  else {
    console.log("Invalid credentials! Please try agains");
  }
}
