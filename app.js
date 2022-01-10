const sliderImgX = document.querySelector('#slider-img-x')
const sliderImgO = document.querySelector('#slider-img-o')

const sliderOptions = document.querySelectorAll('.slider-img-container')

const sliderOptionX = document.getElementById('slider-option-x')
const sliderOptionO = document.getElementById('slider-option-o')

const newGameCPUbtn = document.getElementById('new-game-cpu-btn')
const newGamePlayerbtn = document.getElementById('new-game-player-btn')
const startbtn = document.getElementById('start-btn')
const startbtnLink = document.getElementById('start-btn-link')

const allBtns = document.querySelectorAll('.btn')

let currentOption = 'X'
let opponentType;
let newGameState;

const images = {
    lightGrayX: '../Recources/X-lightgray.png',
    lightGrayO: '../Recources/O-lightgray.png',
    darkGrayX: '../Recources/X-darkgray.png',
    darkGrayO: '../Recources/O-darkgray.png', 
}

// Slider
sliderOptions.forEach(option => {
    option.addEventListener('click', e => {
        if(e.currentTarget.childNodes[1].classList.contains('slider-img-x')){
            currentOption = 'X'
        } else if(e.currentTarget.childNodes[1].classList.contains('slider-img-o')){
            currentOption = 'O'
        }
        switch(currentOption){
            case 'X':
                sliderImgX.src = images.darkGrayX
                sliderImgO.src = images.lightGrayO
                sliderOptionX.classList.add('picked-option')
                sliderOptionX.classList.remove('not-picked-option')
                sliderOptionO.classList.add('not-picked-option')
                sliderOptionO.classList.remove('picked-option')
                break
            case 'O':
                sliderImgX.src = images.lightGrayX
                sliderImgO.src = images.darkGrayO
                sliderOptionX.classList.add('not-picked-option')
                sliderOptionX.classList.remove('picked-option')
                sliderOptionO.classList.add('picked-option')
                sliderOptionO.classList.remove('not-picked-option')
        }
        console.log(currentOption);
    })
})

// New Game Buttons
allBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(e.target == newGameCPUbtn){
            newGameState = 'cpu'
            newGameCPUbtn.style.background = 'var(--clr-player-o-dark)'
            newGamePlayerbtn.style.background = 'var(--clr-player-x-light)'
        } else if (e.target == newGamePlayerbtn){
            newGameState = 'player'
            newGameCPUbtn.style.background = 'var(--clr-player-o-light)'
            newGamePlayerbtn.style.background = 'var(--clr-player-x-dark)'
        }

        if(currentOption && newGameState == 'cpu'){
            startbtnLink.setAttribute('href', '../vsCPU/index.html')
            // startbtn.style.display = 'block'
            startbtn.style.opacity = 1;
        } else if(currentOption && newGameState == 'player') {
            // startbtn.style.display = 'block'
            startbtn.style.opacity = 1;
            startbtnLink.setAttribute('href', '../vsPlayer/index.html')
        }

        // if(currentOption && newGameState){
        //     startbtn.style.display = 'block'
        // }
        console.log(newGameState);
    })
})

<<<<<<< Updated upstream
// startbtn.style.display = 'block'
=======
// Game Mechanics
const boardSquares = document.querySelectorAll('.board-square') //?
const restartBtn = document.getElementById('restart-btn-id') //?
const test = document.querySelector('#123') //?

let currentPlayer = currentOption //?
let allSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let availableSquares = Array.from(allSquares) //?

function changePlayer(player){
    switch(player){
        case 'X':
            currentPlayer = 'Y'
            break
        case 'Y':
            currentPlayer = 'X'
            break
    }
}

boardSquares.forEach(square => {
    const markMoveX = document.createElement('img')
    markMoveX.classList.add('board-square-img')
    markMoveX.src = '../Recources/X.png'
    const markMoveO = document.createElement('img')
    markMoveO.classList.add('board-square-img')
    markMoveO.src = '../Recources/O.png'
    square.addEventListener('click',(e) => {
        console.log(e.target.id);
        let clickedSquareID = e.target.id
        if(!boardSquares[clickedSquareID].classList.contains('used-square')){
                boardSquares[clickedSquareID].classList.add('used-square')
                if(currentPlayer == 'X'){
                    boardSquares[clickedSquareID].appendChild(markMoveX)
                    changePlayer(currentPlayer)
                } else if(currentPlayer == 'Y'){
                    boardSquares[clickedSquareID].appendChild(markMoveO)
                    changePlayer(currentPlayer)
                }
            }
        
        console.log(currentPlayer);
        console.log(availableSquares);
    })
})

restartBtn.addEventListener('click', () => {
    boardSquares.forEach(square => {
        square.classList.remove('used-square')
        square.removeChild()
    })
})
>>>>>>> Stashed changes
