//alert("hello")
/***************** multi-line
    comment */
console.log("hello")
// var age = prompt("give your age! ")
// console.log(age)
// console.warn('this is a warning ')
// console.error('this is an error ')

var str = "Hello Gomycode!"
var y = 5
var tab = [11, 2, 33, 44, 5, 6]
var person = {
    name: "foulen",
    age: 99,
    addresse: {
        country: "Tunisia",
        city: "Ariana"
    },
    hobbies: ["football", "basketball"]
}
console.log(tab)

tab.push(7)
tab.push(8)
console.log(tab)
tab.pop()
console.log(tab)
tab.unshift(0)
tab.unshift(-1)
console.log(tab)
tab.shift()
console.log(tab)

var sum = 0;
// for (var i = 0; i < tab.length; i++) {
//     sum = sum + tab[i];

// }

// for (var i in tab) {
//     sum = sum + tab[i];
// }

// for (var number of tab) {
//     sum = sum + number
// }

tab.forEach(function (number) {
    sum = sum + number
})
var tab2 = [100, 200]
console.log(tab2.concat(tab))
console.log(tab2.indexOf(100))

console.log(str.includes("Go"))
console.log(str.toLocaleLowerCase())
console.log(str.toLocaleUpperCase())

var str2 = str.split(" ")
str2[1] = str2[1].toLocaleUpperCase()
console.log(str2.join(' '))
console.log(str.length)
console.log(str.substring(3, 7))

console.log(person.addresse.city)

person.newprop = "new prop"
person.age = 25
console.log(person.hobbies.includes("football"))

delete person.age
delete person.newprop

console.log(person)

function add(a, b) {
    var result = a + b
    return result
}

// var res = add(78, 56)

var sayeHello = function () {
    return console.log("hello ")
}


var num = 3
if (num > 3) {
    console.log("number is greater than 3")
} else if (num === 3) {
    console.log("number is equal to 3")
}
else {
    console.log("number is less than 3")
}
console.log("first" + " second")

console.log(7 + parseInt("5"))


while (num < 8) {
    console.log(num)
    num++
}

do {
    console.log(num)
    num++
} while (num < 8);


var code = 2
switch (code) {
    case 1:
        console.log("first case")
        break;
    case 2:
        console.log("second case")
        break;

    default:
        console.log("no case found!")
        break;
}

console.log(Math.floor(Math.random() * 100))

console.log(new Date().toDateString())


fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
        "content-type": "application/json",
    },
})
    .then(function (response) {
        response.json()
    })
    .then(function (data) { console.log(data) })


