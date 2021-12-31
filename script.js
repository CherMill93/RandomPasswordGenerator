// Assignment code here
var generateBtn = document.querySelector("#generate");

var number = "0123456789";
var special = "@%+\/',!#$^? )(}{][~-_.";
var Lower = "abcdefghijklmnopqrstuvwxyz";
var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var password ="";
var passwordammount="";
var valNumber;
var valSpecial;
var valLower;
var valUpper;

function generatePassword() {
  var passwordcharacters = "";
  
  var passwordammount = window.prompt("How long would you like your password to be?");
  passwordammount = parseInt (passwordammount);
  
    if (passwordammount < 8) {
       window.alert("password must be more than 8 characters")
       return ""
     }
    if (passwordammount > 128) {
       window.alert("password must be less than 128 characters")
       return ""
     }
    console.log (passwordammount); 
      
    
      var valNumber = window.confirm ("would you like numbers?")
      var valSpecial = window.confirm ("Would you like special characters?")
      var valLower = window.confirm ("Would you like lowercase characters?")
      var valUpper = window.confirm ("Would you like uppercase characters?")
      while (valNumber === false && valSpecial === false && valLower === false && valUpper === false) {
        
        window.alert ("Please select one option to generate a password!");

        var valNumber = window.confirm ("would you like numbers?")
        var valSpecial = window.confirm ("Would you like special characters?")
        var valLower = window.confirm ("Would you like lowercase characters?")
        var valUpper = window.confirm ("Would you like uppercase characters?")
      }
      
      if (valNumber) {
        passwordcharacters += number
      }
      if (valSpecial) {
        passwordcharacters += special
      }
      if (valLower) {
        passwordcharacters += Lower
      }
      if (valUpper) {
        passwordcharacters += Upper
      }
      for ( var i = 0; i < passwordammount; i++) {
        
        password += passwordcharacters [Math.floor(Math.random() * passwordcharacters.length)];
      }
      console.log (password);
      return password;
      };

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  
  var passwordtext = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
