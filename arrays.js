
/*A. Talk about it:
What are the things in an array called?
 
* An element

Do Arrays guarantee those things will be in order?

* yes arrays gurentee that elements will be in order


What real-life thing could you model with an array?
arrays is like a list where you can line up things you're related to, like items in a shopping list or names in a guest list. */


// B. Easy Does It

// Create an array with three quotes
const quotes = ["The only limit to our realization of tomorrow is our doubts of today.", 
    "The purpose of our lives is to be happy.", 
    "Life is what happens when you're busy making other plans."];




// C. Accessing elements

const randomThings = [1, 10, "Hello", true];

// Access the 1st element in the array
console.log(randomThings[0]); // Output: 1

// Change the value of "Hello" to "World"
randomThings[2] = "World";

// Check the value of the array to make sure it updated
console.log(randomThings); // Output: [1, 10, "World", true]





// D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// Access the 3rd element of the array
console.log(ourClass[2]); // Output: Sardine

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");

// Check the updated array
console.log(ourClass); // Output: ["Salty", "Zoom", "Sardine", "Slack", "Octocat", "Cloud City"]




// E Mix up

// Given array
const myArray = [5, 10, 500, 20];

// Add the string "Aegon" to the end of the array
myArray.push("Aegon");

// Add another string of your choice to the end of the array
myArray.push("Skip Marley");

// Remove the 5 from the beginning of the array
myArray.shift();

// Add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley");

// Remove the string of your choice from the end of the array
myArray.pop();

// Reverse the array
myArray.reverse();

// Check the updated array
console.log(myArray);

// Did you mutate the array?
// Yes, the array was mutated. Mutate means to change the original array.
// The .reverse() method returned the reversed array.



//F. Biggie Smalls

// Create a variable that contains an integer
//let number = 95;

// If...else statement
if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

//g. Monkey in the middle

// Create a variable that contains an integer
let number = 7;

// If...else if...else statement
if (number < 5) {
  console.log("little number");
} else if (number > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

//H. whats in your closet 
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  // what is Kristy wearing today?
  console.log("Kristyn is rocking that"+ KristinsCloset[2] + "today!");

  //Krisyn just bought some sweet shades! add "Raybans" to her closet after"yellow knit hat".
  // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";

// Put together an outfit for Thom
const thomsShirt = thomsCloset[0][0];
const thomsPants = thomsCloset[1][1];
const thomsAccessory = thomsCloset[2][1];

console.log(`Thom is looking fierce in a ${thomsShirt}, ${thomsPants} and ${thomsAccessory}!`);

// Get more specific about what kind of PJs Thom's wearing this winter
thomsCloset[1][2] = "Footie Pajamas";