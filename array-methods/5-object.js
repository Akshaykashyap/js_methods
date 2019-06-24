// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
let obj = {
  name: "aman" ,
  rollno: 10 ,
  batch: 8
}
// properties of the object 
for (let key in obj) {
  console.log(key);
}
 name
 rollno
 batch
// values
for (let key in obj) {
  console.log(obj[key]);
}
 aman
 10
 8
// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};
//before deleting
student.rollno
12
//deleting student rollno
delete student.rollno;
true
// after deleting
student.rollno

// 3. Write a function to get the length of an object.
let obj = function (student) {
  return student;
}