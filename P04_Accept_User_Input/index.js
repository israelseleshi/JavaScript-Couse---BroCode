// How to acceot user input

// 1. EASY WAY         = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// 1. EASY WAY
// let username = window.prompt("What's your username?");
// console.log(username);

let username;
document.getElementById('mySubmit').onclick = function() {
  username = document.getElementById("myText").value;
  // console.log(username);
  document.getElementById("myH1").textContent = `Hello ${username}`;
}