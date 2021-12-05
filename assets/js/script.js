// User input
var userAnswer;
var userConfirmUpper;
var userConfirmLower;
var userConfirmSpecial;
var userConfirmNumber;

//passwordPool.split("")
var characterAry = "abcdefghijklmnopqrstuvwxyz";
var characterUpAry = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberAry = "0123456789";
var specAry = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// User choices that will be concatenated
var userInputs;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate Password Function
function generatePassword() {
  
  // Character length user input
  // Base Case: userAnswer == undefined never runs on base case
  // Incorrect Case: userAnswer == !0  runs after incorrect case
  // Correct Case: userAnswer == 8-128 moves on
  while (userAnswer < 8 || userAnswer > 128 || userAnswer == undefined) {
    if (userAnswer || userAnswer == 0) {
      alert("You need to choose a valid value!");
    }
    userAnswer = parseInt(
      prompt(
        "How many characters do you want in your password? Choose a minimum of 8 and a maximum of 128",
        "8"
      )
    );
  }

  var passwordPool;

  // Condition to check at least one is true
  // Base Case:
  // passwordPool == undefined
  // Alert never runs
  while (!passwordPool) {
    if (passwordPool != undefined)
      alert("You need to choose something or else");

    passwordPool = "";
    userConfirmLower = confirm("Do you want to include lowercase characters?");
    userConfirmUpper = confirm("Do you want to include uppercase characters?");
    userConfirmSpecial = confirm("Do you want to include special characters?");
    userConfirmNumber = confirm("Do you want to include numbers?");

    passwordPool += userConfirmLower ? characterAry : "";
    passwordPool += userConfirmUpper ? characterUpAry : "";
    passwordPool += userConfirmSpecial ? specAry : "";
    passwordPool += userConfirmNumber ? numberAry : "";
  }
  //all possible characters to choose from
  var passwordPoolArr = passwordPool.split("");

  //randomPassword is an array of userAnswerLength

  randomPassword = [...Array(userAnswer)].map((x) => 0);
  for (var index = 0; index < randomPassword.length; index++) {
    var randomIndex = Math.floor(Math.random() * (passwordPoolArr.length - 1));
    randomPassword[index] = passwordPoolArr[randomIndex];
  }

  // Concatenate the different ,combine each that have been chosen
  return randomPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerText = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
