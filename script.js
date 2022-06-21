//List of questions
var questions = [
    {
        prompt: "What color is a banana?\n(A) Red \n(B) Yellow \n(C) Green \n(D) Pink",
        answer: "B"
    },
    {
        prompt: "What is the current year?\n(A) 2022 \n(B) 2012 \n(C) 1988 \n(D) 3022",
        answer: "A"
    },
    {
        prompt: "What is the most common language in the world? \n(A) Urdu \n(B) Spanish \n(C) English \n(D) Mandalorian",
        answer: "D"
    }
];

var score = 0;

//Create Button that Starts timer and quiz
var generateBtn = document.querySelector("#startQuiz");

function quizQuestion(){
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
    
    alert("You got " + score + "/" + questions.length);

}

generateBtn.addEventListener("click", quizQuestion);
//Questions that cylce throug and keep a score



//Wrong answers remove a point and decrease timers

//After quiz ends, initilas can be added and saved to the highscore page and will be redirected to initial page

//All highscores in session appear on highscore page