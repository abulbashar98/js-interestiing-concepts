const x = 3;
const y = '3';

// Case 1
/*
if (x == y) {
    console.log('condition is true')
}

else {
    console.log('condition is false')
}
//=====> condition is true
*/


// Case 2

if (x === y) {
    // console.log('condition is true')
}

else {
    // console.log('condition is false')
}
//=====> condition is false

// NOTE: Reason behind this is (==) compares by doing implicit coercion (https://medium.com/front-end-weekly/implicit-coercion-in-javascript-5077ad5510d). Means it converts booleans and strings to number first implicitly and then compare Variables/properties; For primitive values.


// Example:

// const a = 0;
// const b = false;

const a = 1;
const b = true;

if (a == b) {
    // console.log('condition is true')
}

else {
    // console.log('condition is false')
}
//====> condition is true





// NOTE: on non primitive types (==) compares references.


const g = { name: 'Abu naim heera' }
const h = { name: 'Abu naim heera' }

if (g == h) {
    console.log('both are same')
}

else {
    console.log('both are not the same')
}
//===> both are not the same
