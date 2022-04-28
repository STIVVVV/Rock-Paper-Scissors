const computerChoicedDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or use possible choices.length
    
    switch(randomNumber)
    {
        case 1:
            computerChoice = 'rock'
            break;
        
        case 2:
            computerChoice = 'scissors'
            break;

        case 3:
            computerChoice = 'paper'
            break;
    }
    computerChoicedDisplay.innerHTML = computerChoice
}

function getResult()
{
    if(computerChoice === userChoice)
    {
        result = 'Its a draw!'
    }
    else if(computerChoice === 'rock' && userChoice === 'paper')
    {
        result = 'You lost!'
    }
    else if(computerChoice === 'rock' && userChoice === 'scissors')
    {
        result = 'You lost!'
    }
    else if(computerChoice === 'paper' && userChoice === 'scissors')
    {
        result = 'You win!'
    }
    else if(computerChoice === 'rock' && userChoice === 'rock')
    {
        result = 'You lost!'
    }
    else if(computerChoice === 'scissors' && userChoice === 'rock')
    {
        result = 'You win!'
    }
    else if(computerChoice === 'scissors' && userChoice === 'paper')
    {
        result = 'You lost!'
    }
    resultDisplay.innerHTML = result
}