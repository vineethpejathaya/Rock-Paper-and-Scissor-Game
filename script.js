'use strict';
let upper = 5;
let lower = 1;
let playerCode = 0;
let playerScore = 0;
let computerScore= 0;

const playerScorenum = document.querySelector(".player-score");
const computerScorenum = document.querySelector(".computer-score");

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorBtn = document.querySelector(".scissor-btn");
const lizardBtn = document.querySelector(".lizard-btn");
const spockBtn = document.querySelector(".spock-btn");

const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");
const startBtn = document.querySelector(".start-btn");

const innerMessage = document.querySelector(".inner-message");
const winMessage = document.querySelector(".win-message");
rockBtn.addEventListener('click',function(){
   playerImage.src = 'rock.jpeg';
   playerCode = 1;
})

paperBtn.addEventListener('click',function(){
      playerImage.src = 'paper.png';
      playerCode = 2;
   })

scissorBtn.addEventListener('click',function(){
    playerImage.src = 'scissors.png';
    playerCode = 3;
})

lizardBtn.addEventListener('click',function(){
        playerImage.src = 'lizard.png';
        playerCode = 4;
    })

spockBtn.addEventListener('click',function(){
        playerImage.src = 'spock.png';
        playerCode = 5;
    })

startBtn.addEventListener('click',function(){
    if(playerCode !== 0)
    {
    let secNumber = Math.floor(Math.random()* (upper - lower +1)+lower);
    console.log(secNumber);
         
    switch(secNumber){
        case 1:
            computerImage.src = 'rock.jpeg';
            break;
        case 2:
            computerImage.src = 'paper.png';
            break;
        case 3:
            computerImage.src = 'scissors.png';
            break;
        case 4:
            computerImage.src = 'lizard.png';
            break;
        case 5:
            computerImage.src = 'spock.png';
            break;
        default:
            computerImage.src = 'null.png';
    }

    if (playerCode === secNumber)
    {
        innerMessage.textContent = 'Draw';
        console.log('draw');
        winMessage.textContent = 'Nobody Wins!';
    }
    else if (playerCode === 1)
    {
            if(secNumber === 2)
            {
                innerMessage.textContent = 'Paper covers Rock ';
                console.log('Paper covers Rock');
                winMessage.textContent = 'Computer Wins!';
                computerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;

                
            }
            else if (secNumber === 3)
            {
                innerMessage.textContent = 'Rock crushes Scissors';
                console.log('Rock crushes Scissors');
                winMessage.textContent = 'Player Wins!';
                playerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if (secNumber === 4)
            {
                innerMessage.textContent = 'Rock crushes Lizard';
                console.log('Rock crushes Lizard');
                winMessage.textContent = 'Player Wins!';
                playerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if (secNumber === 5)
            {
                innerMessage.textContent = 'Spock vaporizes Rock';
                console.log('Spock vaporizes Rock');
                winMessage.textContent = 'Computer Wins!';
                computerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;

            }

    }
    
    else if (playerCode === 2) 
    {
            if(secNumber === 1)
            {
                innerMessage.textContent = 'Paper covers Rock';
                console.log('Paper covers Rock');
                winMessage.textContent = 'Player Wins!';
                playerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if(secNumber === 3)
            {
                innerMessage.textContent = 'Scissors cuts Paper';
                console.log('Scissors cuts Paper');
                winMessage.textContent = 'Computer Wins!';
                computerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if (secNumber === 4)
            {
                innerMessage.textContent = 'Lizard eats Paper';
                console.log('Lizard eats Paper');
                winMessage.textContent = 'Computer Wins!';
                computerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if (secNumber === 5)
            {
                innerMessage.textContent = 'Paper disproves Spock';
                console.log('Paper disproves Spock');
                winMessage.textContent = 'Player Wins!';
                playerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
    }

    else if (playerCode === 3)
    {
            if(secNumber === 1)
            {
                innerMessage.textContent = 'Rock crushes Scissors';
                console.log('Rock crushes Scissors');
                winMessage.textContent = 'Computer Wins!';
                computerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if(secNumber === 2)
            {
                innerMessage.textContent = 'Scissors cuts Paper';
                console.log('Scissors cuts Paper');
                winMessage.textContent = 'Player Wins!';
                playerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
                
            }
            else if(secNumber === 4)
            {
                innerMessage.textContent = 'Scissors decapitates Lizard';
                console.log('Scissors decapitates Lizard');
                winMessage.textContent = 'Player Wins!';
                playerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if (secNumber === 5)
            {
                innerMessage.textContent = 'Spock smashes Scissors';
                console.log('Spock smashes Scissors');
                winMessage.textContent = 'Computer Wins!';
                computerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
    
            }       
    }
    
    else if (playerCode === 4)
    {
        if(secNumber === 1)
            {
                innerMessage.textContent = 'Rock crushes Lizard';
                console.log('Rock crushes Lizard');
                winMessage.textContent = 'Computer Wins!';
                computerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if(secNumber === 2)
            {
                innerMessage.textContent = 'Lizard eats Paper';
                console.log('Lizard eats Paper');
                winMessage.textContent = 'Player Wins!';
                playerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if(secNumber === 3)
            {
                innerMessage.textContent = 'Scissors decapitates Lizard';
                console.log('Scissors decapitates Lizard');
                winMessage.textContent = 'Computer Wins!';
                computerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
                
            }
            else if (secNumber === 5)
            {
                innerMessage.textContent = 'Lizard poisons Spock';
                console.log('Lizard poisons Spock');
                winMessage.textContent = 'Player Wins!';
                playerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
    
            }     
    }

    else if (playerCode === 5)
    {
        if(secNumber === 1)
            {
                innerMessage.textContent = 'Spock vaporizes Rock';
                console.log('Spock vaporizes Rock');
                winMessage.textContent = 'Player Wins!';
                playerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if(secNumber === 2)
            {
                innerMessage.textContent = 'Paper disproves Spock';
                console.log('Paper disproves Spock');
                winMessage.textContent = 'Computer Wins!';
                computerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
                
            }
            else if(secNumber === 3)
            {
                innerMessage.textContent = 'Spock smashes Scissors';
                console.log('Spock smashes Scissors');
                winMessage.textContent = 'Player Wins!';
                playerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
            }
            else if (secNumber === 4)
            {
                innerMessage.textContent = 'Lizard poisons Spock';
                console.log('Lizard poisons Spock');
                winMessage.textContent = 'Computer Wins!';
                computerScore++ ;
                playerScorenum.textContent = playerScore;
                computerScorenum.textContent = computerScore;
    
            }     
    }
    playerCode = 0;
    
    }
    

else {
        innerMessage.textContent = 'Please select an option';
        console.log('Please select an option');
        winMessage.textContent = '';
}
    


    });