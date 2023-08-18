//1- Find and Update Element:
// Create an array named fruits with the following values: "apple", "banana", "orange", "grape".
// Access the third element directly [2] ("orange") and change its value to "kiwi".
const fruits = ["apple", "banana", "orange", "grape"]
fruits[2] = "orange";
// console.log(fruits);


//2- Add and Remove Elements:
// Create an array named numbers with the following values: 2, 4, 6, 8, 10.
// Add the number 12 to the end of the numbers array.
// Remove the first element from the array.
// const numbers = [ 2, 4, 6, 8, 10];
// numbers.push(12);
// numbers.shift();
// console.log(numbers);


//3- Array Concatenation:
// Create two arrays, firstNames with values: "John", "Emma", "Michael", and lastNames with values: "Doe", "Smith", "Johnson".
// Concatenate the firstNames and lastNames arrays to create a new array named fullNames.
const firstNames = ["John", "Emma", "Michael"];
const lastNames = ["Doe", "Smith", "Johnson"];
const fullNames = firstNames + lastNames;
// console.log(fullNames);

//4- Array Iteration - Sum of Elements:
// Create an array named ages with the following values: 25, 30, 18, 42, 15.
// Use a loop to calculate and return the sum of all the ages.
const ages = [25, 30, 18, 42, 15];
let sum = 0;
for(let i = 0; i<ages.length; i++){
    sum = sum+ages[i];
};
// console.log(sum);


//5- Array Filtering - High Scores:
// Create an array named scores with the following values: 85, 92, 78, 95, 88.
// Write a function that filters the scores array to only include scores that are greater than or equal to 90.

const scores = [85, 92, 78, 95, 88];
const newArray = [];

const filteredArray = (arr)=>{
    arr.forEach((e)=>{
        if(e >= 90){
            newArray.push(e)
        }
    });
};
// filteredArray(scores);
// console.log(newArray);



//6- Array Searching - Index of Element:
// Create an array named countries with values: "USA", "Canada", "Mexico", "France", "Germany".
// Write a function that checks if "Mexico" exists in the countries array. If it does, return its index; otherwise, return -1.
const countries = ["USA", "Canada", "Mexico", "France", "Germany"];
// const countries2 = ["USA", "Canada", "France", "Germany"];

const checker = (arr)=>{
    let found = false;

    arr.forEach((e, index)=>{
        // console.log((e));
        if(e === "Mexico"){
            console.log(e + "is located in " + index);
            found = true;
        }
    });

    if(!found) {
        console.log("Mexico not foound -1");
    }
};

// checker(countries);
// checker(countries2);


//7- Array Transformation - Square Values:
// Create an array named numbers with the following values: 3, 7, 1, 9, 4.
// Write a function that squares each element of the numbers array and returns a new array with the squared values.

const numbers = [3, 7, 1, 9, 4];
const squared = (num)=> {
    let newArray = [];
    num.forEach((e)=>{
        e*=2;
        newArray.push(e);
    });
    // console.log(newArray);
};
// squared(numbers);



//8- Array Sorting - Ascending Order:
// Create an array named grades with the following values: 87, 95, 76, 88, 92.
// Write a function that sorts the grades array in ascending order and returns the sorted array.
const grades = [87, 95, 76, 88, 92];

function sortGrades(arr) {
    return arr.slice().sort((a, b)=> {
        return a - b;
    });
};

const sortedGrades = sortGrades(grades);
// console.log(sortedGrades);



//9- Array Mapping - Double Values:
// Create an array named data with the following values: 10, 20, 30, 40, 50.
// Write a function that doubles each element of the data array and returns a new array with the doubled values.

//10- Array Reduction - Maximum Value:
// Create an array named values with the following values: 34, 12, 78, 53, 90.
// Write a function that finds and returns the maximum value in the values array.


//=============================================================================================== OBJECTS============================================================================

// Copy this object with it’s nested object

// let movie = {

//     name: "Titanic",

//     releaseYear: 1997,

//     director: "James Cameron",

//     actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],

//     starActor: {

//         name: "Leonardo Dicaprio",

//         age: 5,

//         born: 1889,

//         linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",

//         headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"

//     },

//     budgetInMillions: 200

// }

 

// Try to make functions that do the following: 

 

// Access the star actor’s age property  and change the value to 48.
// Access the star actor’s born property and change the value to 1989.
// Add a new property to the starActor object called isPopular and set its value to true.
// Add a new property to the movie object called isGoodMovie with a value of undefined.
// Access the actors array, loop through it and check if the movie has “Tom Cruise” in it. If true, set isGoodMovie to true, else set isGoodMovie to false.



// let cohortFour = {

//     classSize: 5,

//     instructor: {

//         name: "Fred",

//         age: 40,

//         completedCohortIds: [3, 77, 45, 23],

//         email: "fred@fred.com",

//         assistant: {

//             name: "Brad",

//             age: 38,

//             email: "Brad@brad.com"

//         }

//     },

//     classGrades: [99, 100, 89, 88, 95]

// }

 

// Try to make functions that do the following: 

// Check if the class size is > 10
// Check if the instructor has completed more than 2 cohorts.
// Create a function called changeAssistant that will change the name, age, and email of the assistant
// Loop through the completedCohortIds array and check if Fred completed cohort 55
// Loop through the classGrades and check if the average grade is > 90