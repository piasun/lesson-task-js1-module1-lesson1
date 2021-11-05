const instrument = "guitar";

console.log(instrument)

// question2

const button = document.querySelector("button.login");

console.dir(button);

//question3

const instruments = [
    {
        type: "guitar",
        colour: "red",
    },
    {
        type: "piano",
        colour: "black",
    },
];

console.table(instruments);

//question4

const name = "Percival";
const age = 13;

//question5

let total = 0;
total = total + 10;

//question6

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//question7
const firstName = "Florence";

const introduction = `Hello.

My name is ${firstName}
`;

console.log(introduction);

//question8

const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `
Welcome!
This ${title} is starting today.
Have a ${whatToHave}`;

console.log(welcome);

//question9

const car = {
    "paint-colour": "red",
    "number of wheels": 3
};

console.log(car["paint-colour"] + " " + car["number of wheels"]);

//question10
const product = {
    name: "Chicken Lips",
    price: 35,
    expired: false,
    getExpired: function() {
        console.log("This product is " + this.expired);
    }
}

product.getExpired();