/*-------------- *\
    DATA TYPES
\*-----------------*/

/* Primitive

1.Number
2.String
3.Boolean
4.Undefined
5.Null
6.Symbol -->> es6*/


/* Non Primitive 

7. Object       */



// Differences of primitive and Non-Primitive

// Case 1
// let a = '21'
// let b = a;
// console.log(a, b);
//===>>> 21, 21

//Case 2
let a = 'Hello';
let b = a;
console.log(a, b);    // Hello  Hello
a = 12;
console.log(a, b);    // 12     Hello


// Note: Reference for a has changed in memory, but reference for b is still the same as a = 'Hello'




// Case 1

// let x = { job: 'web developer' }
// let y = x;
// console.log(x, y);

// Case 2

let x = { job: 'web developer' }
let y = x;
console.log(x, y);
x.job = 'Software Engineer'
console.log(x, y);
//====>{ job: 'Software Engineer' } { job: 'Software Engineer' }


//Note: Reference remains the same;
