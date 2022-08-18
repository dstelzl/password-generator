/*if length is between 18-128
      move on to Prompt 2
   else
    display message "Invalid Password length. Must be 8-128 charaters in length" and Prompt 1 again  
  
  Move through remaining prompts...
  if one of the 4 is "true" or "yes"
    create password
  else
    display "Invalid Entry- must choose at least one character type" and return to prompt 2
    
    
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */


// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
var upper = 'ABC'
var lower = 'abc'
var numbers = '123'
var char = '!@#'
console.log(char[0])
// Write password to the #password input
function writePassword() {
  console.log("click")
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


 

function generatePassword(){
 
  console.log('generating password')
var possibleChars = ""
var password = ""

  var passLength = prompt('How long would you like your password to be?')
  console.log(passLength)
  var lCase = confirm ('Do you want to include lowercase letters')
  if (lCase){
    possibleChars = possibleChars + lower
  }
  console.log(possibleChars)
  var uCase = confirm ('Do you want to include Uppercase letters')
  if (uCase){
    possibleChars = possibleChars + upper
  }
  console.log(possibleChars)
  var num = confirm ('Do you want to include numbers')
  if (num){
    possibleChars += numbers
  }
  console.log(possibleChars)
  var specChar = confirm ('Do you want to include specila characters')
  if (specChar){
    possibleChars = possibleChars + char
  }
  console.log(possibleChars)

  console.log(lCase, uCase, num, specChar)
for (var i=0; i<passLength; i++){
  console.log(i)
  var randomIndex = Math.floor(Math.random()* possibleChars.length)
  console.log(randomIndex)
  console.log(possibleChars[randomIndex])
password += (possibleChars[randomIndex])
console.log(password)
}
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






//var lowerCase = prompt("Would you like to use lowercase letters in your password?")
//var upperCase = prompt("Would you like to use lowercase letters in your password?")
//var passwordLength = prompt("How many characters would you like for your password? (Can be between 8-128))
//var number = prompt("Would you like numbers in your password?")
//var specialChar = prompt("Would you like to include special characters in your password?")

//if (passwordLength <8){
////  console.log("invalid password length. Must be at least 8 characters")
//}
//if (passwordLength > 128){
//console.log("invalid password. May be no more than 128 characters")
//}