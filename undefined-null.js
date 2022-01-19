/*
1. if variable value wasn't assigned
2. function but didn't return anything
3. Just wrote return but didn't return anything
4. parameter that wasn't passed
5. try to access a property that doesn't exist in an Object
6. try to access an element of an array index that doesn't exist
7. try to access an element of an array that doesn't exist or was deleted or spliced

*/
// case 1
let x;
// console.log(x);


// case 2
function sum(x, y) {
    const result = x + y;
}
const output = sum(12, 43)
// console.log(output);

// cae 3
function add(a, b) {
    const sum = a + b;
    return;
    const fun = a * b;
    return sum;
}
const output2 = add(23, 2)
// console.log(output2);



// case 4

function double(a, b) {
    const doubled = a * 2
    // console.log(b)
    return doubled;
}

const result2 = double(12);


// case 5

const person = { name: 'Abul Bashar', age: 24, location: 'Dhaka' }
// console.log(person.job)


// case 6

const number = [23, 54, 12, 87, 43]
// console.log(number[8])

// case 7
delete number[2];
console.log(number[2])

//case 8
let x = undefined;
console.log(x);
