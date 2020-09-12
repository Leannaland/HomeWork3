//1. call all prompts
// 2. call variables for lowercase, uppercase, special --> generate random set
// 3. display in html + console log
// 4. append what is console loggged to the text area 



//Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Where my prompts will go and return a password 
function generatePassword () {
  document.getElementById("password").value = password;
  var passwordLength= prompt("Password Length?")
  if (length > 10) { 
    alert("Password must be greater than 10")
  }
console.log(passwordLength)
  var upperCase = prompt("Do you want Upper Case letters?")
  if (upperCase == "No") { alert("Try Again")
  }
console.log(upperCase)
  var lowerCase = prompt("Do you want Lower Case letters?")
  if (lowerCase == "No") { alert("Try Again")
}
console.log(lowerCase)
  var NumbersCase = prompt("Do you want Numbers in your password?")
  if (NumbersCase == "No") { alert("Try Again")
}
console.log(NumbersCase)


return String.fromCharCode(Math.floor(Math.random() * 33) + 93);   
}


// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);