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
