//One line comment
/*********  multi-line 
 *          comments ******* */
// var name = prompt('give your name')
console.log("normale comment")
console.warn("this is a warning message")
console.error("this is an Error message")

/******************************************
 *  Variabls declaration using var key word
 ******************************************/
var x = 5; // type Number
var str = "string" // type String
var tab = [3, 2, 5, 6, 7, 8, 9] // type Array
var person = {
    name: "Baha",
    email: "baha@gmail.com",
    address: {
        home: "Nour jaafer",
        city: "Rouad"
    },
    hobbies: ["football", "eating"]

} // type Object


/*--------------------------------------------------------
                   Some Array methods
----------------------------------------------------------*/


console.log(tab)
tab.push(10)
tab.push(11)
console.log(tab)

tab.pop()
tab.unshift(1)

console.log(tab)
tab.shift()
tab[tab.length] = 25
console.log(tab)
console.log(tab)
var tab2 = [30, 50]
console.log(tab.includes(10))

/*--------------------------------------------------------
                some String methods
----------------------------------------------------------*/
var str2 = "hello gomycode!"
console.log(str.concat(str2))
console.log(tab.concat(tab2))

console.log(str2.toLocaleUpperCase())
console.log(str2.split(''))

/*--------------------------------------------------------
                    some Object methods
----------------------------------------------------------*/
person.age = 28
person.email = "baha2024@gmail.com"
person.age = 29

delete person.name;
console.log(person)
console.log(person.hobbies[0])

/*--------------------------------------------------------
                    Declaration of function
----------------------------------------------------------*/
function sayHello(name) {
    console.log('hello ' + name + " from gomycode!")
}

sayHello("Hamza")

/*--------------------------------------------------------
                    function with condition
----------------------------------------------------------*/
function condition(number) {
    if (number > 5) {
        return "Number grater than 5"
    } else if (number === 5) {
        return " Number equals than 5"

    } else {
        return (" Number less than 5")

    }
}

console.log(condition(5))

var color = 2;

switch (color) {
    case 1:
        console.log("color is red")
        break;
    case 2:
        console.log("color is blue")
        break;
    case 3:
        console.log("color is green")
        break;

    default:
        console.log("there is no color with this code ")
        break;
}
var i = 5
while (i < 5) {
    console.log(i)
    i++
}

// do {
//     console.log(i)
//     i++
// } while (i < 5);

for (var j = 0; j < 3; j++) {
    console.log(j)

}