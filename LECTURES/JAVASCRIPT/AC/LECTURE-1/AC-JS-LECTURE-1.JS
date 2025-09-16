// 1.
console.log("Topic - Console.log");
console.log("Hello World");
// 2.
console.log("Topic - Variable Rules");
console.log("Point-1");
// Variable names are case sensitive
TestName = "Hitogami";
testName = "Sam";
console.log("TestName");
console.log(TestName);
console.log("testName");
console.log(testName);
console.log("Point-2");
// Only letters, digits, underscore and dollar sign are allowed
a="Lowercase letter";
console.log("a");
console.log(a);
A="Uppercase letter";
console.log("A");
console.log(A);
_1="Digit";
console.log("_1");
console.log(_1);
console.log("Note : Digits cannot be the first letter of a variable name");
_="Underscore";
console.log("_");
console.log(_);
$="Dollar sign";
console.log("$");
console.log($);
console.log("Point-3");
Note= "reserved words cannot be used as variable names";
console.log("Note");
console.log(Note);
console.log("Point-4");
camelCase = "The first letter of the first word will be small rest will be capital...";
console.log("camelCase");
console.log(camelCase);
camelCaseExample = "Do you get it now?";
console.log("camelCaseExample");
console.log(camelCaseExample);
// 3.
console.log("Topic - Let, const and var");
let semiChangeable = "Can be changed but not re-declared";
console.log("let semiChangeable");
console.log(semiChangeable);
const unChangeable = "Cannot be changed or re-declared";
console.log("const unChangeable");
console.log(unChangeable);
var changeable = "Can be changed and re-declared";
console.log("var changeable");
console.log(changeable);
_Note = "If you do not use let, const or var keywords to declare a variable, it will be considered as var";
console.log("_Note");
console.log(_Note);
// 4.
console.log("Topic - Data Types");
// Primitive Data Types`

// string
let stringDataType = "This is a string data type";
console.log("stringDataType");
console.log(stringDataType);

// number
let numberDataType = 1234567890;
console.log("numberDataType");
console.log(numberDataType);

// boolean
let booleanDataType = true;
console.log("booleanDataType");
console.log(booleanDataType);

// undefined
let undefinedDataType;
console.log("undefinedDataType");
console.log(undefinedDataType);

// null
let nullDataType = null;
console.log("nullDataType");
console.log(nullDataType);

// symbol
let symbolDataType = Symbol("This is a symbol data type");
console.log("symbolDataType");
console.log(symbolDataType);

// Non-Primitive Data Types

// object
let objectDataType = {name: "Hitogami", age: 18, isStudent: true};
console.log("objectDataType");
console.log(objectDataType);

// array
let arrayDataType = ["Hitogami", 18, true];
console.log("arrayDataType");
console.log(arrayDataType);

// function
let functionDataType = function(){ return "This is a function data type"; }
console.log("functionDataType");
console.log(functionDataType);
console.log("functionDataType()");
console.log(functionDataType());
// 5.
console.log("Topic - Playing with objects");
const student = {
    fullName : "Random Kumar",
    age :20,
    cgpa : 8.2,
    isPass : true
};
console.log("student");
console.log(student);
console.log("student.fullName");
console.log(student.fullName);
console.log("student['age']");
console.log(student['age']);
student.cgpa = 8.5;
console.log("You can use dot(.) or square bracket([]) notation to access the properties of an object");
console.log("You can change the properties of an object using dot(.) or square bracket([]) notation");
console.log("student.cgpa = 8.5");
console.log("student.cgpa");
console.log(student.cgpa);
student['isPass'] = false;
console.log("student['isPass'] = false");
console.log("student['isPass']");
console.log(student['isPass']);
console.log(student);
console.log("Even when an object is declared using const, its properties can be changed");

console.log("END OF LECTURE-1");