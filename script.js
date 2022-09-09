const emas = [
    'De',
    'Emas',
    2037-1994,
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

// We want to start at emasArray 0 (let i = 0;) which is the first element.
// That is the reason why we started the counter (let i = 0) at zero because that's the first element that we want to get.

// console.log(emasArray[0]);
// console.log(emasArray[1]);
// ...
// console.log(emasArray[4]);


// emasArray[5] does NOT exist and so that means that the i counter variable should always stay below five i < 5;

for(let i = 0; i < emas.length; i++) {

    // Reading from emas array
    console.log(emas[i], typeof emas[i]);


    // Filling types array
    // types[i] = typeof emas[i];    // types[0] = 'string'; So in iteration 0, we will have type 0 equals type of emas 0, then in the next iteration, we will have types 1 equal type of Jonas 1.

    // Or 
    // push() adds a new element to the end of the array. We need to pass in the element that we do want to add on to the array typeof emas[i].
    types.push(typeof emas[i]);
}

console.log(types);



const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    // First - Calculate the age of the current year 2037 - years[i] and the second thing we want to add it to this new empty array ages with push() method. 
   ages.push(2037 - years[i]);
}
console.log(ages);













// Continue and Break Statement

// Continue is to exit the current iteration of the loop and continue to the next one.
// Break    is used to completely terminate the whole loop.


// Let's say that for some reason we only wanted to print elements to the array that are strings and the continue statement is perfect for this.
console.log('---ONLY STRINGS ---');
for(let i = 0; i < emas.length; i++) {
    // if the type of the current element emas[i] is not (!==) a string then continue.
    if(typeof emas[i] !== 'string') continue;
    console.log(emas[i], typeof emas[i]);
}



// Break example
// What we want to do now is to log no other elements after we found a number.Essentially after a number is found nothing else should be printed.
console.log('---BREAK WITH NUMBER ---');
for(let i = 0; i < emas.length; i++) {
    
    if(typeof emas[i] === 'number') break;
    console.log(emas[i], typeof emas[i]);
}

