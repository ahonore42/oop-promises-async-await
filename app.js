// Object Oriented Programming

// Prototypal Inheritance

const dog = {
    name: "Michael",
    goodBoy: true,
    gender: "girl"
};

const dogTwo = {
    name: 'Rocco',
    color: 'brown'
};

dogTwo.__proto__ = dog;

console.log(dog);
console.log(dogTwo);

console.log(dogTwo.goodBoy);
console.log(dogTwo.name);

// Make two objects and one object needs to inherit from the object.
const apartOne = {
    location: "Brooklyn",
    color: "red",
    rooms: 3
};
const apartTwo = {
    location: "Long Island",
    color: "white"
};
apartTwo.__proto__ = apartOne;

console.log(apartTwo.color); // white
console.log(apartTwo.rooms); // 3

apartTwo.rooms = 4;
console.log(apartTwo.rooms);
console.log(apartOne.rooms);

// Constructor Functions
function User(name) {
    // this
    this.name = name;

    // return this
}

let adam = new User('Adam');
let pete = new User('Pete')
console.log(adam.name)
console.log(pete.name)

function NBAPLayer(name, team, threePointer) {
    this.name = name;
    this.team = team;
    this.threePointer = threePointer;

    // return this
}

let steph = new NBAPLayer('Steph Curry', 'Warriors', true)

// make a constructor function with 3 new variables

function RememberTheName(luck, skill, powerOfWill, pleasure, pain, remember) {
    this.luck = luck
    this.skill = skill
    this.powerOfWill = powerOfWill
    this.pleasure = pleasure
    this.pain = pain
    this.remember = remember
}

let yaBoi = new RememberTheName('10%', '20%', '15%', '5%', '50%', true)
console.log(yaBoi)