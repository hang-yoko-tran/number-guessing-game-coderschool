const randomNumber = Math.floor(Math.random() * (100)) + 1;
console.log("random number", randomNumber)
let history = [];
let allowedTimes = 5;

function guess() {
    if (allowedTimes > 0) {
        let resultArea = "";

        const guessingNum = document.getElementById("guessing-number").value;
        // console.log(guessingNum)
        document.getElementById("guessing-number").value = "";

        if (history.includes(guessingNum)) {
            // console.log('Hey, you have already guessed this number');
            document.getElementById("status").innerHTML = "Hey, you have already guessed this number";
            document.getElementById("status").style.color = 'black';
            return;
        }
        history.push(guessingNum);
        allowedTimes-- //SAME AS allowedTimes = allowedTimes -1
        document.getElementById('times').innerHTML = allowedTimes;


        if (guessingNum < randomNumber) {
            // console.log('Your number is too low');
            document.getElementById("status").innerHTML = "Your number is too low!"
            document.getElementById("status").style.color = 'black';
        }
        else if (guessingNum > randomNumber) {
            // console.log('Your number is too high');
            document.getElementById("status").innerHTML = "Your number is too high!"
            document.getElementById("status").style.color = 'black';
        }
        else {
            document.getElementById("status").innerHTML = "Yay, that is right!"
            document.getElementById("status").style.color = 'green';
            document.getElementById("guess-action").disabled = true;
            // /console.log('Yay, that is right');
        }
        for (i = 0; i < history.length; i++) {
            resultArea = resultArea + `<li>${history[i]}</li>`;
        }
        document.getElementById("result-area").innerHTML = resultArea;
    }

    else {
        // console.log('Game Over');
        //alert("Game over!!!")
        document.getElementById("status").innerHTML = "GAME OVER!"
    }
}

function startOver() {
    history = [];
    document.getElementById("result-area").innerHTML = "";
    allowedTimes = 5;
    document.getElementById('times').innerHTML = allowedTimes;
    document.getElementById("status").innerHTML = "";
    document.getElementById("guess-action").disabled = false;
    
}