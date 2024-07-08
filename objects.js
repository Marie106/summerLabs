// A. Make a user object
let user = {
    name: "Marie Bangoura",
    email: "MBcats@gmail.com",
    age: 25,
    purchased: []
};

// B. Update the user
user.email = "MBCats@yahoo.com";
user.age++;  // Increment age using the postfix operator

console.log(user.email);  // Output: MBCats@yahoo.com
console.log(user.age);    // Output: 26

// C. Adding keys and values
user.location = "Ohio";

// D. Shopaholic!
user.purchased.push("Carbohydrates");
user.purchased.push("Peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[2]);  // Output: Merino jodhpurs

// E. Object-within-object
user.friend = {
    name: "Zeina Athie",
    age: 26,
    location: "Ohio",
    purchased: []
};

console.log(user.friend.name);      // Output: Zeina Athie
console.log(user.friend.location);  // Output: Ohio
console.log(user.friend.age);       // Output: 26

// Change the friend's age to 55
user.friend.age = 55;

// The friend has purchased "The One Ring"
user.friend.purchased.push("The One Ring");

// The friend has purchased "A latte"
user.friend.purchased.push("A latte");

console.log(user.friend.purchased[1]);  // Output: A latte
console.log(user);

// F. Loops
// Iterate over the User's purchased array
for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
}

// Iterate over the Friend's purchased array
for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
}

// G. Functions can operate on objects
// updateUser function
function updateUser() {
    user.age++;
    user.name = user.name.toUpperCase();
}

// Call the updateUser function
updateUser();
console.log(user);

// oldAndLoud function
function oldAndLoud(person) {
    person.age++;
    person.name = person.name.toUpperCase();
}

// Call the oldAndLoud function with user as the argument
oldAndLoud(user);
console.log(user);