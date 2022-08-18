   

//THEN I choose a length of at least 8 characters and no more than 128 characters
  //if (passlength <8){
 //alert("Must be at least 8 characters.")
 // }
 // if (passlength >128){
  //  alert("Must be less than 128 characters")
 // }


// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = 'abcdefghijklmnopqrstuvwxyz'
var numbers = '0123456789'
var char = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"'
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


