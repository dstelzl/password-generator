

var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var char = '"#$%&\'()*+,-./:;<=>?@[]^_`{|}~"';
console.log(char[0]);


function writePassword() {
  console.log("click");
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  console.log("generating password");
  var possibleChars = "";
  var password = "";

  var passLength = prompt("How long would you like your password to be?");
  if (passLength < 8 || passLength > 128 || passLength === NaN){
    alert('Password length must be between 8 - 128 characters');
    
  }
  console.log(passLength);
//Lowercase
  var lCase = confirm("Do you want to include lowercase letters?");
  if (lCase) {
    possibleChars = possibleChars + lower;
  }
  console.log(possibleChars);
  //Uppercase
  var uCase = confirm("Do you want to include Uppercase letters");
  if (uCase) {
    possibleChars = possibleChars + upper;
  }
  console.log(possibleChars);
  //Numbers
  var num = confirm("Do you want to include numbers");
  if (num) {
    possibleChars += numbers;
  }
  console.log(possibleChars);
  //Special Character
  var specChar = confirm("Do you want to include special characters");
  if (specChar) {
    possibleChars = possibleChars + char;
  }
  console.log(possibleChars);

  console.log(lCase, uCase, num, specChar);

  for (var i = 0; i < passLength; i++) {
    console.log(i);
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    console.log(randomIndex);
    console.log(possibleChars[randomIndex]);
    password += possibleChars[randomIndex];
  }
  return password;
}


generateBtn.addEventListener("click", writePassword);
