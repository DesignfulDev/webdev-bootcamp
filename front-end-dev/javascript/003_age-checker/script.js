// Get user input for age
var usrAge = Number(prompt("How old are you?"))

// Check if user input is negative
if(usrAge < 0) {
    console.log("You can't have a negative age")
}

// Check if user 21
else if(usrAge === 21) {
    console.log("Hey, happy 21st birthday");
}

// Check if user age is odd
else if(usrAge % 2 !== 0) {
    console.log("Your age is odd!")
}

// Check if user age is a perfect square
else if(usrAge % Math.sqrt(usrAge) === 0){
    console.log("Your age is a perfect square")
}