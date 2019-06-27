// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods
 
// for each method
numbers.forEach(num => {
  console.log(num+1);
})
// map method 
numbers.map(num => num+1);
(11) [2, 13, 5, 19, 10, 8, 12, 4, 102, 6, 7]
// filter metohd
numbers.filter(num => num>length);
(9) [12, 4, 18, 9, 7, 11, 101, 5, 6]
// splice method
numbers.splice(1,0,10);
(12) [1, 10, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6]
// Find largest number in numbers
numbers[8];
// Find longest string in strings
strings[3];
// Find all the even numbers
numbers.filter(num => {
  if (num%2==0) {
      return num;
  }
})
(4) [12, 4, 18, 6]
// Find all the odd numbers
numbers.filter(num => {
  if (num%2==0) {
      return 0;
  } else {
      return num;
  }
})
(7) [1, 9, 7, 11, 3, 101, 5]
// Find all the words that contain 'is' use string method 'includes'
for (var key in strings) {
  if (key.includes("of", 0) == true) {
      console.log(strings.[key]);
  } else {
      console.log("nothing");
  }
}
// Find all the words that contain 'is' use string method 'indexOf'

// Check if all the numbers in numbers array are divisible by three use array method (every)
function funct(value) {
  return value/3;
}
numbers.every(funct)
//  Sort Array from smallest to largest
strings.sort();
numbers.sort();
// Remove the last word in string
strings.pop();
// Add a new word in the array
strings.push("hello"); in last.
strings.unshift("world"); in start
// Remove the first word in the array
strings.shift();
// Place a new word at the start of the array use (upshift)
strings.upshift("welcome");
// Make a subset of numbers array [18,9,7,11]
numbers.splice(10, 0, 18,9,7,11)
// Make a subset of strings array ['a','collection']
strings.splice(5, 0, "a","collection")
// Replace 12 & 18 with 1221 and 1881
numbers.splice(1,1,1221); 
numbers.splice(3,1,1821);
// Replace words with string in strings array
strings.splice(5, 1, "strings")
// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

// Create new array with firstname and lastname

// Sort the array created above alphabetically
