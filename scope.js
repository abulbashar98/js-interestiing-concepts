

/*  Scopes:-
1. Global Scope
2. Local Scope
3. Block Scope
*/

const favNum = 25;


function add(first, second) {
    const result = first + second;
    // console.log(first);              //====> 34     Local
    // cons.log(favNum)                // ======>25    Global
    // console.log(mood)                case -> 2 //===> undefined       Issue: Hoisting
    if (result > 9) {
        // Case 1 (const, let)

        // const mood = 'happy'
        // console.log(mood)          //====> 'happy'  Block


        // Case 2 (var) 
        // var mood = 'cranky'

        // case 3
        mood = 'cranky'
        mood = 'happy'                    // Implicit global


    }
    // console.log(mood);            Case->1   // ReferenceError: mood is not defined Issue: block
    // console.log(mood);                Case-> 2  //====>cranky   Issue: global scope leaking

    return result;
}
const sum = add(34, 65);
// console.log(first);                  // ReferenceError: first is not defined  Issue: local

// console.log(favNum);                   // =======> 25    Global   

// console.log(mood);                  case -> 3    //======>happy        Global Leaking 



// for (var i = 0; i < 10; i++) {

// }
// console.log(i)                     // ======> 10       Global Leaking


for (let i = 0; i < 10; i++) {

}
console.log(i)           // i is not defined          Block Scope