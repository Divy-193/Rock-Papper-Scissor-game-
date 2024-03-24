 let userScore = 0;
 let compScore = 0;

 const options = document.querySelectorAll(".option");
 const msg = document.querySelector("#msg");
 const userscorePara = document.querySelector("#user-score");
 const compscorePara = document.querySelector("#comp-score");



 options.forEach((option) => {
   option.addEventListener("click",() => {
       const userChoice = option.getAttribute("id");
       playGame(userChoice);
   });
});  


 const gencompChoice = () =>{
   const choices = ["rock","scissors","paper"];
   const randomIdx = Math.floor(Math.random() * 3);
   return choices[randomIdx];
 }

 const drawGame = () => {
   console.log("Game is Draw ");
   msg.innerText= "It's a Draw,Play it Again.";
   msg.style.backgroundColor = "#7474ae";
 }


 const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
      userScore++;
      userscorePara.innerText = userScore;
      msg.innerText= `You Win!! your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else{
      compScore++;
      compscorePara.innerText = compScore;
       msg.innerText= `You lose, ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor = "red";
      }
   }


 function playGame(userChoice) {
   console.log("You chouse ", userChoice);
   const compChoice = gencompChoice();
   console.log("Comp chouse ", compChoice);

   //  Draw:
   if (userChoice === compChoice) {
      drawGame();
   }
   else {
      let userWin = true;
      if (userChoice === "rock") {
         userWin = compChoice === "paper" ? false : true;
      }
      else if (userChoice === "paper") {
         userWin = compChoice === "scissors" ? false : true;
      }
      else {
         userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin,userChoice,compChoice);
   }
 }
