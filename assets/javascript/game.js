// press any key to get started


// Create word Bank

var wordBank = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]


var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var answerArray = [];

for (var i = 0; i < currentWord.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = currentWord.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert("Please select a single letter.");

    } else {
        for (var j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

document.getElementById(answerArray.join(" "));
alert("Good job! The answer was " + currentWord);


