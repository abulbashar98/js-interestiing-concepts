
function welcomeMessage(name, greetHandler) {

    greetHandler(name)
}

// const name = 'tom hanks'
// welcomeMessage(name)

// const names = ['tom hanks', 'tom cruise', 'tom brady']
// welcomeMessage(names)

function greetMorning(name) {
    console.log('good morning', name)
}
function greetAfternoon(name) {
    console.log('good afternoon', name)
}
function greetEvening(name) {
    console.log('good evening', name)
}
function greetNight(name) {
    console.log('good night', name);
}

welcomeMessage('Tom Hanks', greetMorning)
welcomeMessage('Tom Blundell', greetAfternoon)
welcomeMessage('Tom Crurise', greetEvening)
welcomeMessage('Tom Blair', greetNight)