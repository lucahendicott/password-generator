
// create string variables for all possible characters to be used.
  let upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowerCaseString = "abcdefghijklmnopqrstuvwzyx"
  let specialCharactersString = "!@#$?.,&*()[]{}%^+="
  let numbersString = "0123456789"

  //create function for generating a password.
function generatePassword() {

  //create boolean variables for user confirmation.
  let upperCase = confirm("Would you like to use uppercase letters?")
  let lowerCase = confirm("Would you like to use lowercase letters?")
  let specialCharacters = confirm("Would you like to use special characters?")
  let numbers = confirm("Would you like to use numbers?")
  
  let retVal = ""
  let charset = ""
 

     //loop to check if all variables are false. If so, user is prompted to select again.
    while (lowerCase == false && upperCase == false && numbers == false && specialCharacters == false) {
    alert("Please select one type of character");
       upperCase = confirm("Would you like to use uppercase letters?")
       lowerCase = confirm("Would you like to use lowercase letters?")
       specialCharacters = confirm("Would you like to use special characters?")
       numbers = confirm("Would you like to use numbers?")
  }
  
  //run loop allowing password to only be a number between 8 and 128 characters. 
  let passwordLength=parseInt(prompt("How many characters would you like your password to be? (Must be between 8 and 128 characters)."));
  while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a number between 8 and 128 characters");
      passwordLength=parseInt(prompt("How many characters would you like your password to be? (Must be between 8 and 128 characters)."));
  } 

  //conditonals logging if character types are confirmed/true, then store that type of character for generating.
  if (upperCase) {
    charset += upperCaseString
    
  }
  if (lowerCase) {
    charset += lowerCaseString

  }
  if (specialCharacters) {
    charset += specialCharactersString

  }
  if (numbers) {
    charset += numbersString

  }

  // for loop to run length of the password and return value.
  for (let i = 0, n = charset.length; i < passwordLength; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal

}

// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
