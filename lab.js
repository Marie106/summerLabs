
/*
1. How do we assign a value to a variable?
   A. With the assignment operator `=`.
   
2. How do we change the value of a variable?
   A. By using the assignment operator again to assign a new value.

3. How do we assign an existing variable to a new variable?
   A. By using the assignment operator to assign the value of the existing variable to the new variable.

4. Remind me, what are declare, assign, and define?
   A. Declare: To declare a variable means to create it using `var`, `let`, or `const`.
      Assign: To assign a value means to give a variable a value using the assignment operator `=`.
      Define: Defining a variable usually means both declaring it and assigning it a value at the same time.

5. What is pseudocoding and why should you do it?
   A. Pseudocoding is writing an informal high-level description of the operating principle of a program or algorithm. It helps you plan and understand the logic before writing the actual code.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
   A. Approximately 70-90% of the time should be spent planning and thinking about the solution, and 10-30% typing the actual code.
*/

//B.strings
let firstVariable = "Hello World";
firstvariable = 31;
let secondVariable = firstVariable;
secondVariable = "New string"



// Value of firstVariable
console.log(firstVariable); // 31

let yourName = "Marie"

console.log ("Hello my name is " + yourName  );

//C. Booleans

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true ||false);
  console.log(false || false || false || false || false || true);
  console.log(false || false)
  console.log(e === 'Kevin');
  console.log(a < b && b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a + a ===d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


//D The Farm

let animal = "cow"
if (animal === "cow"){
    console.log("moooo");
} else {
    console.log("Hey! You're not a cow."
);
}



//E. Driver's Ed
let age = 25
if (age >= 16){
    console.log("Here is the keys!")
}else {
    ("sorry, you're too young")
}


