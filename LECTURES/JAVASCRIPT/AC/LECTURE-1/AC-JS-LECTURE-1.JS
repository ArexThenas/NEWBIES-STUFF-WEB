// Topic - Console.log
console.log("Hello World!");
// Topic - Variable rules
//  A. Variable names are case sensitive ; "a" and "A" are not the same...
//  B. Only letters, digits, underscores and dollar sign are allowed... 
// Note : Even space between characters is not allowes...
// C. Digits cannot be the first character in a variable name...
// D. Reserved words cannot be variable names...
age = 21;
Age = 22;

console.log(age);
console.log(Age);

const Student = {
fullName : "Rahul",
age : 20,
cgpa : 8.2,
isPass : true
                        };
console.log(Student);
console.log(Student["age"]);
console.log(Student["cgpa"]);

Student["age"] = Student["age"];
Student["fullName"] = "Rahul Sharma";
console.log(Student["age"])