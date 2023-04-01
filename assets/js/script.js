// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created Arrays of Possible Character Choices
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var special = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// User options, prompts, and requirements

function userQuestions() {
  var isValid = false;
  do {
    var length = prompt(
      "Please choose a password length between 8 and 128 characters."
    );
    var qNumbers = confirm("Do you want your password to include numbers?");
    var qLowerCase = confirm(
      "Do you want to include the use of lowercase letters?"
    );
    var qUpperCase = confirm(
      "Do you want to include the use of uppercase letters?"
    );
    var qSpecial = confirm(
      "Do you want to include the use of any special characters?"
    );

    var responses = {
      length: length,
      qNumbers: qNumbers,
      qLowerCase: qLowerCase,
      qUpperCase: qUpperCase,
      qSpecial: qSpecial,
    };
    if (length < 8 || length > 128)
      alert("Please choose a number between 8 and 128!");
    else if (!qNumbers && !qLowerCase && !qUpperCase && !qSpecial)
      alert("You must choose on type.");
    else isValid = true;
  } while (!isValid);
  return responses;
}

// Parcing user responses and creating passwords
function generatePassword() {
  var pwdOptions = userQuestions();
  var combo = [];
  var finalpwd = "";

  if (pwdOptions.qNumbers) {
    for (var i of numbers) combo.push(i);
  }
  if (pwdOptions.qLowerCase) {
    for (var i of lowerCase) combo.push(i);
  }
  if (pwdOptions.qUpperCase) {
    for (var i of upperCase) combo.push(i);
  }
  if (pwdOptions.qSpecial) {
    for (var i of special) combo.push(i);
  }

  console.log(combo);

  for (var i = 0; i < pwdOptions.length; i++) {
    finalpwd += combo[Math.floor(Math.random() * combo.length)];
  }
  console.log(finalpwd);

  return finalpwd;
}

// #password input function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to generate button

generateBtn.addEventListener("click", writePassword);
