// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // If random number is minimum, fx return myMin, max fx return myMax; test with different case numbers

}

// Change these values to test your function
var myRandom = randomRange(5, 15);