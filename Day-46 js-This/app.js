
// 'use strict';
// “this” in Global Context
// console.log(this);

var firstName = 'Munna';

// “this” in Regular Functions
function myFunction() {
  return this;
}

// console.log(myFunction());

//“this” in Arrow Functions
const myFunc = () => {
  // console.log(this);
};
myFunc();

// “this” in Event Handlers
const myBtn = document.querySelector('button');
myBtn.addEventListener('click', function () {
  console.log(this);
});

var fName = 'Nayeem';
// let fName = 'Hassan';

// “this” in Methods of an Object
const student = {
  fName: 'Munna',
  sInfo: function () {
    // console.log(`${student.fName} loves to read`);
    return `${this.fName} loves to read`;
  },
  // Example using arrow function 👇
  arrowFunction: () => {
    return `${this.fName} loves to read`;
  },
};

console.log(student.sInfo());
student.fName = 'Nayeem';
console.log(student.sInfo());
console.log(student.arrowFunction());


function newPhone() {
  let phone = 'Android';
  console.log(this.phone);
}
newPhone();

const game = {
  gName: 'NfS',
  gInfo: function () {
    console.log(`Love to play ${this.gName}`);
  },
};

const aGame = {
  gName: 'Car Game',
};
// The bind() method is used to create a new function with a specified value of “this” and initial arguments.
const bindGame = game.gInfo.bind(aGame);
console.log(game.gInfo());
console.log(bindGame());