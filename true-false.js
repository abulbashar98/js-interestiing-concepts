

/* Truthy:
1. true
2. Any number(Positive or Negative)
3. Any String that is not empty including a white space even, '0', 'false'
4. []  empty array.
5. {}   empty object.


*/
/* Falsy:
1.false
2. 0
3.empty String
4. undefined
5. NaN
6. null
*/



// let x = [];
let x = {};
console.log('value of x ', x)
if (x) {
    console.log('variable is truthy')
}
else {
    console.log('variable is falsy')
}