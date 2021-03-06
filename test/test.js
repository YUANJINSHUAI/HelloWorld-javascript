console.log(3/2);

// Objects
var obj = {
    name: 'Carrot',
    _forever: 'Max1', // 'for' is a reserved word, use '_for' instead
    details: {
        color: 'orange',
        size: 12
    }
}

// Accessing Properties

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn'],
    diet() {
        console.log(this.color);
    }
  };

spaceship.diet();

console.log("-------------");
console.log(`spaceship.color: + ${spaceship.color}`);



obj.details.color; //orange
obj['details']['size']; // 12
console.log("-------------");
console.log(obj._forever);
console.log("-------------");


console.log('I am a Node program');

var l = 0;
var r = 4;
console.log(Math.ceil((l + r)/2));
