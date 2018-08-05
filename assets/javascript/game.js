// press any key to get started


// Create word Bank
var wordBank = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]

var randomItem = wordBank[Math.floor(Math.random() * wordBank.length)];

function onClick() {
    document.getElementById(start).innerHTML = randomItem;
    return randomItem;
}

console.log(randomItem);
// Wins (# of times words guessed correctly)

    // Display Words with underline
    //Reveal Correct letters as user guesses them

//Display number of guesses remaining

//Display letters already guessed

//Game restarts directly after wins/losses

//Bonus

//Play a sound or song when user guesses their correct letter/word
//Create theme and CSS

