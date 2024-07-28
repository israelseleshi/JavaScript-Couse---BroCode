// string methods = allow you to manipulate and work with text (strings)

let userName = " israeltheodros";

console.log(userName.charAt(0));
console.log(userName.indexOf('o')); // will return the index of the first occurence of the character specified.
console.log(userName.lastIndexOf('r'));
console.log(userName.length); // output: 14
console.log(userName.trim()); // trims outer white space.
console.log(userName.toUpperCase()); 
console.log(userName.toLowerCase()); 
console.log(userName.repeat(3)); 

let startsWithResult = userName.startsWith(' '); 

if (startsWithResult) {
  console.log("Your username can't being with ' '.");
}
else {
  console.log(userName);
}

let endsWithResult = userName.endsWith(' '); 

if (endsWithResult) {
  console.log("Your username can't being with ' '.");
}
else {
  console.log(userName);
}

let includesResult = userName.includes(' '); 

if (includesResult) {
  console.log("Your username can't include ' '.");
}
else {
  console.log(userName);
}

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "0"); // output: 000123/456/7890
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(15, "0"); // output: 123/456/7890000
console.log(phoneNumber); // output: 123/456/7890000