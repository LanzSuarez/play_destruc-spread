// ... Spread Operator and Rest Parameters
// ? What is spread operator?
// The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an integer (e,g an array) and expands it into individual elements. The spread operator is used to copy an array, add elements to an array, and add properties toto an object

//Example 1
// Copying an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // Output: [1, 2, 3]

//Example 2
// Merging arrays
const ex2_arr1 = [1, 2, 3];
const ex2_arr2 = [4, 5, 6];
const ex2_arr3 = [...ex2_arr1, ...ex2_arr2];

console.log(ex2_arr3); // Output: [1, 2, 3, 4, 5, 6]

//Example 3
// Adding elements to an array
const ex3_arr1 = [1, 2, 3];
const ex3_arr2 = [...ex3_arr1, 4, 5, 6]

console.log(ex3_arr2); // Output: [1, 2, 3, 4, 5, 6]

// The spread operator is not only used for arrays, it can also be used for objects.
//Example 4
// Copying an object

const obj1 = {name: "John", age: 25};
const obj2 = {...obj1};

console.log(obj2); // Output: {name: "John", age: 25}

//Example 5
// Merging objects
const obj3 = {name: "John", age: 25  };
const obj4 = {city: 'New York', 'country': 'USA'};

const obj5 = {...obj3, ...obj4};

console.log(mergedObj); // Output: {name: "John", age: 25, city: 'New York', country: 'USA'}

//Example 6
// Adding properties to an object
const obj6 = {name: "John", age: 25};
const obj7 = { ...obj6, city: 'New York', country: 'USA'};

console.log(obj7); // Output: {name: "John", age: 25, city: 'New York', country: 'USA'}

//Example 7
// Overriding properties
const obj8 = {name: 'John', age: 25};
const obj9 = {...obj8, age: 30};

console.log(obj9); // Output: {name: 'John', age: 30}
// ! Rest Parameters
// Rest Parameters are used to represent an identifier number of arguments as an array. It allows you to pass an arbitrary number of arguments to a function.

//Example 8
function sum(...args) {
    return args;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: [1, 2, 3, 4, 5]

// Instructions
// Recode the following code snippets.

// Complete the following tasks:
// Create a function printHobbies the prints the last element of the hobbies array.
// Create an arrow function ultimateHobby that prints the last element of the hobbies array.
// Call the ultimateHobby function.

// Play around with the spread operator and rest parameters

// Function to print the last element of the hobbies array
function printHobbies(hobbies) {
    console.log(hobbies[hobbies.length - 1]);
}

// Arrow function to print the last element of the hobbies array
const ultimateHobby = (hobbies) => {
    console.log(hobbies[hobbies.length - 1]);
};

// Call the ultimateHobby function
const hobbies = ['Reading', 'Gaming', 'Traveling'];
ultimateHobby(hobbies);