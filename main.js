// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
const currentDate = new Date()

document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
// let num = 6;
// let text = num.toString();
// console.log(text)

// const convertNumberToString = (string) => {
//   const result = Number(string)
//   return result
// }

// console.log(convertNumberToString(5))

// Write a JavaScript program to convert a string to the number.
// let x = number("1000")
// console.log(number)

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const checkDataType = () => {
return typeof element

}

console.log(checkDataType(5))
  
// Write a JavaScript program that adds 2 numbers together.
let z = document.getElementById("z")
let y = document.getElementById("y")
let sum = z + y

const addTwoNumbers = (z, y) => {
 const sum = z + y
 document.getElementById("sum").innerHTML
}

console.log(sum)

// const num1 = 6;
// const num2 = 5;

// const sum = num1 + num2;

// console.log()


// Write a JavaScript program that runs only when 2 things are true.
const age = 34
const hasKids = true

if (age >= 30 && hasKids) {
  console.log("Jorden is over 30 and has kids")
}






// Write a JavaScript program that runs when 1 of 2 things are true.
const brownHair = false
const blueEyes = true

if (brownHair || blueEyes) {
  console.log("jorden has brown hair or blue eyes")
}

else {
console.log("jorden doesnt have brown hair or blue eyes")
}



// Write a JavaScript program that runs when both things are not true.  
// const bigNose = false
// const bigEars = false

// if (bigNose || bigEars) {

// }

// else () {
//     console.log("jorden doesnt have a big nose or big ears");
//   } 

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
