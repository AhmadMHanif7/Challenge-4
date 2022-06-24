//List of questions
var questions = [
    {
        prompt: "HTML stands for:\n(A) HighText Machine Language\n(B) HyperText and links Markup Language\n(C) HyperText Markup Language\n(D) None of these",
        answer: "C"
    },
    {
        prompt: "CSS stands for:\n(A) Cascade style sheets\n(B) Color and style sheets\n(C) Cascading style sheets\n(D) None of the above",
        answer: "C"
    }
    // },
    // {
    //     prompt: "Which type of launguage is JavaScript?\n(A) Object-Oriented\n(B) Object-Based\n(C) Assembly-language\n(D) High-level",
    //     answer: "B"
    // },
    // {
    //     prompt: "The HTML attribute used to define the inline styles is:\n(A) style\n(B) styles\n(C) class\n(D) None of the above",
    //     answer: "A"
    // },
    // {
    //     prompt: "Which of the following tag is used for inserting the largest heading in HTML?\n(A) <h3>\n(B) <h2>\n(C) <h6>\n(D) <h1>",
    //     answer: "D"
    // },
    // {
    //     prompt: "Which of the following variables takes precedece over the others if the names are the same\n(A) Global variable\n(B) Local element\n(C) All of the above\n(D) None of the above",
    //     answer: "B"
    // },
    // {
    //     prompt: "The HTML attribute used to define the internal stylesheet is:\n(A) <style>\n(B) style\n(C) <link>\n(D) <script>",
    //     answer: "A"
    // },
    // {
    //     prompt: "How to create an unorder list in HTML?\n(A) <ul>\n(B) <ol>\n(C) <li>\n(D) <i>",
    //     answer: "A"
    // },
    // {
    //     prompt: "Which one of the following is the correct way for calling the JavaScript Code?\n(A) Preprocessor\n(B) Triggering Event\n(C) RMI\n(D) Function/Method",
    //     answer: "D"
    // },
    // {
    //     prompt: "CSS property used to control the element's font size is:\n(A) text-style\n(B) text-size\n(C) font-size\n(D) None of the above",
    //     answer: "C"
    // },
    // {
    //     prompt: "Which is not considered an error in JavaScript?\n(A) Syntax Error\n(B) Missing Semicolons\n(C) Division by 0\n(D) Misisng Bracket",
    //     answer: "C"
    // },
    // {
    //     prompt: "How to insert an inage into HTML?\n(A) <img href = 'jtp.png'/>\n(B) <img url = 'jtp.png'/>\n(C) <img link = 'jtp.png'/>\n(D) <img src = 'jtp.png'/> ",
    //     answer: "D"
    // }
];

var playerScore = [];

const startingMinutes = 3;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("timerDisplay");

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 3 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

//Create Button that Starts timer and quiz
var generateBtn = document.querySelector("#startQuiz");

function quizQuestion(){
    setInterval(updateCountdown,1000);
    var score = 0;

    for(var i = 0; i < questions.length; i++){
        var response = window.prompt(questions[i].prompt)
        if(response == questions[i].answer){
            score++;
            alert("Correct!");
        }
        else {
            alert("Wrong!");
        }
    }
    var playerName = window.prompt("Enter player name:");

    var scoreUpdate = {
        name: playerName,
        points: score
    }
    playerScore.push(scoreUpdate);

    const savedScores = JSON.stringify(playerScore);
    localStorage.setItem("Player and Scores", savedScores);
    alert(playerName + " got " + score + "/" + questions.length);
}


generateBtn.addEventListener("click", quizQuestion);
//Questions that cylce throug and keep a score



//Wrong answers remove a point and decrease timers

//After quiz ends, initilas can be added and saved to the highscore page and will be redirected to initial page

//All highscores in session appear on highscore page