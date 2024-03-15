let userChoice = document.querySelector('.user-choice')
let computerChoice = document.querySelector('.computer-choice')
let result = document.querySelector('.result')
let buttons = document.querySelectorAll('button')

let userCh
let compCh


// Функція яка вибирає вибір комп'ютера//
let generateComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        compCh = 'rock'
    } else if (randomNumber === 1) {
        compCh = 'scissors'
    } else if (randomNumber===2) {
        compCh = 'paper'
    }
    computerChoice.textContent = compCh
}
let compareChoices = () => {
    if (userCh === compCh) {
        result.textContent = 'draw'
    } else if (userCh === 'rock' && compCh === 'scissors') {
        result.textContent = 'you win'
    } else if (userCh === 'scissors' && compCh === 'rock') {
        result.textContent = 'you lose'
    } else if (userCh === 'rock' && compCh === 'paper') {
        result.textContent = 'you lose'
    } else if (userCh === 'paper' && compCh === 'rock') {
        result.textContent = 'you win'
    } else if (userCh === 'paper' && compCh === 'scissors') {
        result.textContent = 'you lose'
    } else if (userCh === 'scissors' && compCh === 'paper') {
        result.textContent = 'you win'
    }
}

for(let btn of buttons) {
   btn.addEventListener('click', function(){
    userCh = btn.id
    userChoice.textContent = userCh
    generateComputerChoice()
    compareChoices()
   }) 
}