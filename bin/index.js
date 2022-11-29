#! /usr/bin/env node
let args = process.argv.slice(2);

if (args.length < 1) {
  console.error('Please enter at least 1 number.');
  process.exit(1); //an error occurred
}

// function to get factorial
const factorial = num => {
    if(num === 1) {
        return 1;
    };
    return num * factorial(num - 1);
}

// convert data types
args = args.map(input => {
    const num = parseInt(input);
    if(isNaN(num)) {
        console.error('One or more arguments are not numbers.');
        process.exit(1); //an error occurred
    };
    return num;
});
 
// get factorials
const answers = args.map(num => factorial(parseInt(num)));

// return answers
console.log("\nResult ----------------------------------");
for (let i = 0; i < args.length; i++) {
    console.log(`Factorial of ${args[i]} is:\t${answers[i]}`);    
}
console.log("-------------------------------------------\n");
process.exit(0); //no errors occurred