

function stopWatch() {

    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
const clock = stopWatch()
console.log(clock())        //====> 1
console.log(clock())        //====> 2
console.log(clock())        //====> 3

const clock2 = stopWatch()
console.log(clock2())           //====> 1  
console.log(clock2())           //====> 2
console.log(clock())            //=====> 4
console.log(clock2())           //======>3
console.log(clock())            //======>5
const clock3 = stopWatch()
console.log(clock3())           //=====>1



// Note: each variable of clock has created a closure for counter;





/*-------------- *\
    Wes Boss 
\*-----------------*/

// Closure
function createGreeting(greeting = '') {
    const myGreet = greeting.toUpperCase();
    return function (name) {
        return `${myGreet} ${name}`;
    }
}
const sayHello = createGreeting('hello')
const sayHey = createGreeting('hey')

console.log(sayHello('wes'));
console.log(sayHey('kait'))
console.log(sayHello('wes'))



// Note:  So closure is that we can use the greeting= '' by calling the inner function created as parameter sayHello, sayHey. Bcoz in Conventional sense after the createGreeting() function is done their parameters should go into garbage. but because of the inner function we can call that outer scope Parameter using closure again and again. Even after the higher scope function is closed.





// Private Variable
// Example 2:

function createGame(gameName = '') {
    let score = 0;
    return function win() {
        score++;
        return `your ${gameName} score is ${score}`
    }
}

const hockeyGame = createGame('hockey');
const footballGame = createGame('football');

console.log(hockeyGame())
console.log(footballGame())
console.log(hockeyGame())
console.log(footballGame())
console.log(hockeyGame())
console.log(footballGame())
console.log(hockeyGame())
console.log(footballGame())


// Note: we can see here now every time we call hockeyGame() or footballGame() now it it declares a variable score; And this private variable stores its value in closure;



