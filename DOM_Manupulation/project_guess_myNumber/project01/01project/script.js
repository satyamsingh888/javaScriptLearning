'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 14;
// document.querySelector('.guess').value = 13;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // When there is no input
  
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
   
    // When player wins
 } else if(guess === secretNumber){
  displayMessage('🎉Correct Number!');
  //  document.querySelector('.message').textContent='🎉Correct Number!';
   document.querySelector('.number').textContent = secretNumber;
   document.querySelector('body').style.backgroundColor = '#60b347';
   document.querySelector('.number').style.width = '30rem';
   if(score>highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore
   }
   
    //when guess is too high
  } else if(guess!==secretNumber){
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ?'📈Too high': '📉Too low';
      displayMessage(guess > secretNumber ?'📈Too high': '📉Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You lost the game!';
      displayMessage('💥You lost the game!');
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').style.width = '30rem';
    }
  }

  
  // else if(guess>secretNumber){
  //   if(score>1){
  //     document.querySelector('.message').textContent='📈Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else{
  //     document.querySelector('.message').textContent='💥You lost the game!';
  //     document.querySelector('body').style.backgroundColor = '#ff0000';
  //     document.querySelector('.number').style.width = '30rem';
  //   }
    
    
  //   //when guess is too low
  // } else if(guess<secretNumber){
  //   if(score>1){
  //     document.querySelector('.message').textContent='📉Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   else{
  //     document.querySelector('.message').textContent='💥You lost the game!';
  //     document.querySelector('body').style.backgroundColor = '#ff0000';
  //     document.querySelector('.number').style.width = '30rem';
  //   }
  // } 
  
});

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.message').textContent= 'Start guessing...';
displayMessage('Start guessing...');
document.querySelector('.score').textContent= score;
document.querySelector('.number').textContent= '?';
document.querySelector('.guess').value= '';
document.querySelector('body').style.backgroundColor= '#222';
document.querySelector('.number').style.width= '15rem';
  })

