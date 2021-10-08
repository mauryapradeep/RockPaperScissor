let userScore= 0;
let computerScore= 0;
const userScore_span=  document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissor_div = document.getElementById("scissor")

// FUNCTION FOR COMPUTER CHOICE
function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"]
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

// FUNCTION FOR WIN
function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}. YOU WIN!🔥 `
    userChoice_div.classList.add('green-glow');
    setTimeout(()=> userChoice_div.classList.remove('green-glow'), 400);
}

// FUNCTION FOR DRAW
function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    userChoice_div = document.getElementById(userChoice)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord}. DRAW!!🤡.`
    userChoice_div.classList.add('gray-glow');
    setTimeout(()=> userChoice_div.classList.remove('gray-glow'), 400);
}

// FUNCTION FOR LOST
function lost(userChoice, computerChoice){
    userChoice_div = document.getElementById(userChoice)
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    userChoice_div.classList.add('red-glow')
    result_p.innerHTML = `${userChoice}${smallUserWord} defeated ${computerChoice}${smallCompWord}. YOU LOSS!!😭`
    setTimeout(()=> userChoice_div.classList.remove('red-glow'), 400);
}

// FUNCTION FOR COMPARISON USER AND COMPUTER CHOICES
function game(userChoice){
   const computerChoice = getComputerChoice()
   switch(userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;

        case "paperscissor":
        case "scissorrock":
        case "rockpaper":
            lost(userChoice , computerChoice);
            break;

        case "paperpaper":
        case "rockrock":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
   }
}
function main(){
    rock_div.addEventListener('click', ()=> game("rock"));
    paper_div.addEventListener('click', ()=>game("paper"));
    scissor_div.addEventListener('click', ()=> game("scissor"));
      }

main();

