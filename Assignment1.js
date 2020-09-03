//Program to search a particular character in a string

let data = "Welcome to the World of Coding";

for (let i = 0; i < data.length; i++) {
  if (data[i] == "W") {
    console.log("The Character found in the index of " + i);
  }
}

//Program to Convert Minutes to Seconds

let time = 60;
let time_conversion = 60 * 60;

console.log(
  "Time in minutes is " +
    time +
    " min. And the time converted in seconds is " +
    time_conversion +
    " seconds"
);

//Program to search an element in a array of strings

let name = ["Ramesh", "Suresh", "Ganesh", "Bhuvanesh", "Dinesh", "Sarvesh"];

for (let i = 0; i < name.length; i++) {
  if (name[i] == "Ganesh") {
    console.log("Ganesh is found in the string");
  }
}

//Program to display elements containing 'a' in them form a array

let array = [
  "India",
  "China",
  "Russia",
  "Germany",
  "Kite",
  "Less",
  "Norway",
  "Srilanka"];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < 8; j++) {
    if (array[i][j] == "a") {
      console.log(array[i]);
    }
  }
}

//To print an array in reverse order

let arr = [2, 3, 5, 6].reverse();
console.log("Array in Reverse order is " + arr);
