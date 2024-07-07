//A. Basics
// 1. Print all numbers from 0 to 10 inclusive
for(let i = 0; i <= 10; i++)
    console.log (i)

// print out all the numbers from 10 up to and including 400

for (let i = 10; i <= 400; i++){

    console.log(i);
}

for (let i = 12; i <= 4000; i += 3){
    console.log (i);
}


//B. Get even

//Print out the numbers that are within the range of 1 - 100

for (let i = 1; i <= 100; i++){
    if( i % 2 === 0){
        console.log(i + ",--is an even number ");

    } else {
        console.log(i);
    }
}

//c. Give me Five
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

// C. Give me Five

// Print messages for multiples of 3 and 5 between 0 and 100
for(let i = 0; i <= 100; i++){
    console.log ('I found a ${i}. High five!');
if ( i % 3 === 0 && i % 5 === 0){
} else if (i % 3 === 0) {
    console.log (' I found a ${i}. Three is a crowd');

}else if (i % 5=== 0){
    console.log ( ' i found a ${i}. High Five');
} else { 
    console.log(i);
}
}


// D. Savings account
//1. sum of all number between 1-10
let bank_account = 0
for (let i = 1; i <= 10; i++)
    {
        bank_account +=i;
    }

    console.log('Bank account (sum of 1-10):$' + bank_account);// should be $55

        // 2. sum of all number between 2 - 100 multiplied by 2
        bank_account = 0;
        for (let i = 1; i <+ 100; i++){
            bank_account +=i * 2;
        }
        console.log('Bank account (sum of 1-100 doubled):$' + bank_account);// should be $10,1000