const body = document.querySelector('body')

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

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let currentOption = 'x'
let opponentType;
let newGameState;

const images = {
    lightGrayX: './Recources/X-lightgray.png',
    lightGrayO: './Recources/O-lightgray.png',
    darkGrayX: './Recources/X-darkgray.png',
    darkGrayO: './Recources/O-darkgray.png', 
}

function resetHeight(){
    document.body.style.height = window.innerHeight + "px";
}
window.addEventListener("resize", resetHeight);

window.addEventListener('popstate', resetHeight)

resetHeight();

// Slider
sliderOptions.forEach(option => {
    option.addEventListener('click', e => {
        if(e.currentTarget.childNodes[1].classList.contains('slider-img-x')){
            currentOption = 'x'
        } else if(e.currentTarget.childNodes[1].classList.contains('slider-img-o')){
            currentOption = 'o'
        }
        switch(currentOption){
            case 'x':
                sliderImgX.src = images.darkGrayX
                sliderImgO.src = images.lightGrayO
                sliderOptionX.classList.add('picked-option')
                sliderOptionX.classList.remove('not-picked-option')
                sliderOptionO.classList.add('not-picked-option')
                sliderOptionO.classList.remove('picked-option')
                break
            case 'o':
                sliderImgX.src = images.lightGrayX
                sliderImgO.src = images.darkGrayO
                sliderOptionX.classList.add('not-picked-option')
                sliderOptionX.classList.remove('picked-option')
                sliderOptionO.classList.add('picked-option')
                sliderOptionO.classList.remove('not-picked-option')
        }
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
            startbtnLink.setAttribute('href', './vsCPU/index.html')
            // startbtn.style.display = 'block'
            startbtn.style.opacity = 1;
        } else if(currentOption && newGameState == 'player') {
            // startbtn.style.display = 'block'
            startbtn.style.opacity = 1;
            startbtnLink.setAttribute('href', './vsPlayer/index.html')
        }

        // if(currentOption && newGameState){
        //     startbtn.style.display = 'block'
        // }
        console.log(newGameState);
    })
})

// Game Mechanics
const boardSquares = document.querySelectorAll('.board-square') //?
const restart = document.querySelector('#restart') //?
const currentTurnIndicator = document.querySelector('#indicator')

let currentPlayer = currentOption //?
let allSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let availableSquares = Array.from(allSquares) //?

function changePlayer(player){
    switch(player){
        case 'x':
            currentPlayer = 'o'
            break
        case 'o':
            currentPlayer = 'x'
            break
    }
}

function changeTurnIndicator(state) {
    if(state == 'x'){
            currentTurnIndicator.src = '../Recources/X-lightgray.png'
        } else {
            currentTurnIndicator.src = '../Recources/O-lightgray.png'
        }
}

function checkWin (arrayOfSquares, state){
    const x = 'X.png'
    const o = 'O.png'

    let now;

    switch(state){
        case 'x':
            now = 'o'
            break
        case 'o':
            now = 'x'
    }

    // console.log(state);
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return arrayOfSquares[index].classList.contains(now)
        })
    })
}

// Mark a square
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
                if(currentPlayer == 'x'){
                    boardSquares[clickedSquareID].appendChild(markMoveX)
                    boardSquares[clickedSquareID].classList.add('x')
                    changePlayer(currentPlayer)
                } else if(currentPlayer == 'o'){
                    boardSquares[clickedSquareID].appendChild(markMoveO)
                    boardSquares[clickedSquareID].classList.add('o')
                    changePlayer(currentPlayer)
                }
            }
        
        changeTurnIndicator(currentPlayer)
        if(checkWin(boardSquares, currentPlayer)){
            if(currentPlayer == 'x'){
                alert('o wins')
            } else if(currentPlayer = 'o'){
                alert('x wins');
            }
        }

        
        console.log(availableSquares);
    })
    
})



// document.addEventListener('click', () => {
//     if(checkWin(boardSquares, currentPlayer)){
//         console.log(`${currentPlayer} wins`);
//     }
// })

// Reset button
restart.addEventListener('click', () => {
    currentPlayer = 'x'
    changeTurnIndicator(currentPlayer)

    boardSquares.forEach(square => {
        if(square.classList.contains('used-square')){
            square.classList.remove('used-square')
            square.classList.remove('x')
            square.classList.remove('o')
        }
        if(square.firstChild.nextSibling){
            square.removeChild(square.firstChild.nextSibling)
        }

    })
    
})
