// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  var passwordLength = prompt("How many characters would you like for your password? (Can be between 8-128))
  var lowerCase = prompt("Would you like to use lowercase letters in your password?")
  var upperCase = prompt("Would you like to use lowercase letters in your password?")
  var number = prompt("Would you like numbers in your password?")
  var specialChar = prompt("Would you like to include special characters in your password?")

  if

function generatePassword(){
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);