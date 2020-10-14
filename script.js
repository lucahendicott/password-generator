  function generatePassword() {

  let upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowerCaseString = "abcdefghijklmnopqrstuvwzyx"
  let specialCharactersString = "!@#$?.&"
  let numbersString = "0123456789"
  let upperCase = confirm("Would you like to use upper case letters?")
  let lowerCase = confirm("Would you like to use lower case letters?")
  let specialCharacters = confirm("Would you like to use special characters?")
  let numbers = confirm("Would you like to use numbers?")
  let howLong = prompt("how many characters would you like your password to have?")
  
  let retVal = ""
  let charset = ""
  let length = parseInt(howLong)

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

  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal

}

let generateBtn = document.querySelector('#generate');

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);