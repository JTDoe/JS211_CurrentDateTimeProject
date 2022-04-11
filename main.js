// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// const { string } = require("stylelint/lib/formatters");

// const syntax = require("postcss-html");


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
const cN2S = () => {
 let num = document.getElementById('convertToString').value
 let newstr = num.toString();
 document.getElementById('convertToStringH1').innerHTML = newstr
 console.log(newstr)
}
cN2S()




// Write a JavaScript program to convert a string to the number.

const cS2N = () => {
  let str = document.getElementById('stringToNumber').value
  let myNewNum = parseInt(str)
  document.getElementById('convertToNumberH1').innerHTML = myNewNum
  console.log(myNewNum)
}
cS2N()


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
const determineType = () => {
  let entry = document.getElementById('typeof').value
  if (typeof(entry) === 'number') {
    console.log('Number')
  }
  if (typeof(entry) === 'string') {
    console.log('string')
  }
  if (typeof(entry) === 'boolean') {
    console.log('boolean')
  }
  if (typeof(entry) === 'null') {
    console.log('null')
  }
  if (typeof(entry) === 'NaN') {
    console.log('NaN')
  }
  if (typeof(entry) === 'undefined') {
    console.log('undefined')
  }
}

console.log(determineType(true))



// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = () => {
  let num1 = document.getElementById('z').value
  let num2 = document.getElementById('y').value
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  let sum = num1 + num2
  document.getElementById('sum').innerHTML = sum
}


// Write a JavaScript program that runs only when 2 things are true.

const bothTrue = () => {
  let X = document.getElementById('X').value
  let Y = document.getElementById('Y').value
  if (X == true && Y == true) {
  console.log("both are true")
} else {
  console.log('one or more is false')
}
}
bothTrue()
// Write a JavaScript program that runs when 1 of 2 things are true.
let J = false
let K = true
const oneTrue = () => {
  if (J == true || K == true) {
    console.log('one is true')
    // return "one is true"
  } else {
    console.log('neither is true')
  // return "neither is true"
}
}
oneTrue ()


// Write a JavaScript program that runs when both things are not true.  
let T = false
let H = false
const bothFalse = () => {
  if (T == false && H == false) {
    console.log('both are false')
  } else {
    console.log('both are not false')
  }
}
bothFalse()


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
