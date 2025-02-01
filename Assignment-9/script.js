// question(1):- Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?


function Scopes() {
       
    var varVariable = "abcd"; 
    let letVariable = "abcd";
    const constVariable = "abcd"; 
    console.log("Inside function:");
    console.log(varVariable); 
    console.log(letVariable); 
    console.log(constVariable); 
    {
        var blockVar = "abcd2"; 
        let blockLet = "abcd2"; 
        const blockConst = "abcd2"; 
        console.log("inside block:");
        console.log(blockVar); 
        console.log(blockLet);
        console.log(blockConst);
    }
    console.log("Outside block:");
    console.log("var :- "+blockVar);
}
Scopes()



// question(2):- Create an array called fruits that contains five different fruit names.and Write a function that returns the second fruit in the array.

const fruits = ["Apple", "Banana", "Cherry", "Date", "berry"];

function getSecondFruit(arr) {
return arr[1]; 
}
console.log(getSecondFruit(fruits)); // Output: "Banana"




// question(3):- Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

const testArray = [1, 2, 3, 4];

function modifyArray(arr) {
arr.push(5);
arr.pop(); 
return arr; 
}

console.log(modifyArray(testArray)); // Output: [1, 2, 3, 4]




// question(4):- Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

const numberArr = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
return arr.map(num => num * num); 
}

console.log(squareNumbers(numberArr)); // Output: [1, 4, 9, 16, 25]




// question(5):- Write a function that filters out all even numbers from an array of  numbers using the filter() method. Return the new array of odd numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterOdds(arr) {
return arr.filter(num => num % 2 !== 0);
}
console.log(filterOdds(numbers)); // Output: [1, 3, 5, 7, 9]





// question(6):- Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

const person = {
name: "Sameer Alam",
age: 21,
occupation: "Java Developer"
};

function greetPerson(obj) {
console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old, and I studing ${obj.occupation} Course.`);
}
greetPerson(person); // greeting




// question(7):- Write a function that takes an object with properties width andheight and returns the area of a rectangle (width * height).

const rectangle = 
{ 
width:20,
height: 5 
};
function calculateRectangleArea(rect) {
return rect.width * rect.height;
}

console.log(calculateRectangleArea(rectangle)); // Output: 100



// question(8):- Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

const exampleObject =
{ name: "Sameer Alam", age: 21, occupation: "Java Developer" };

function getObjectKeys(obj) {
return Object.keys(obj); 
}
console.log(getObjectKeys(exampleObject)); // Output: ["name", "age", "occupation"]





// question(9):- Write a function that takes two objects as arguments and mergesthem into one object using Object.assign(). Return the new object.

const object1 = { name: "Sameer Alam", age: 21 };
const object2 = { occupation: "Java Developer",timing: '5pm-6pm' };

function mergeObjects(obj1, obj2) {

return Object.assign({}, obj1, obj2);

}

console.log(mergeObjects(object1, object2)); 
// Output: { name: "Alice", age: 28, occupation: "Software Developer", location: "New York" }





// question(10):- Create an array of numbers and write a function that uses the reduce()  method to calculate the sum of all the numbers in the array.

const numbersArr = [1, 2, 3, 4, 5];
function sumArray(arr) {
return arr.reduce((sum, currNum) => sum + currNum, 0);
}

console.log(sumArray(numbersArr));  // output : 15