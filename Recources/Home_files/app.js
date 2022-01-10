const sliderImgX = document.querySelector('#slider-img-x')
const sliderImgO = document.querySelector('#slider-img-o')

const sliderOptions = document.querySelectorAll('.slider-img-container')

const sliderOptionX = document.getElementById('slider-option-x')
const sliderOptionO = document.getElementById('slider-option-o')

let currentOption;

const images = {
    lightGrayX: '../Recources/X-lightgray.png',
    lightGrayO: '../Recources/O-lightgray.png',
    darkGrayX: '../Recources/X-darkgray.png',
    darkGrayO: '../Recources/O-darkgray.png', 
}

// sliderOptionX.classList[1].style.opacity = 0.1 //?
sliderOptionO.classList //?

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
        e.target.classList.toggle('transition')
        console.log(currentOption);
    })
})

// // Slider
// sliderOptions.forEach(option => {
//     option.addEventListener('click', e => {
//         if(e.currentTarget.childNodes[1].classList.contains('slider-img-x')){
//             currentOption = 'X'
//         } else if(e.currentTarget.childNodes[1].classList.contains('slider-img-o')){
//             currentOption = 'O'
//         }
//         switch(currentOption){
//             case 'X':
//                 sliderImgX.src = images.darkGrayX
//                 sliderImgO.src = images.lightGrayO
//                 sliderOptionX.classList.add('picked-option')
//                 sliderOptionX.classList.remove('not-picked-option')
//                 sliderOptionO.classList.add('not-picked-option')
//                 sliderOptionO.classList.remove('picked-option')
//                 break
//             case 'O':
//                 sliderImgX.src = images.lightGrayX
//                 sliderImgO.src = images.darkGrayO
//                 sliderOptionX.classList.add('not-picked-option')
//                 sliderOptionX.classList.remove('picked-option')
//                 sliderOptionO.classList.add('picked-option')
//                 sliderOptionO.classList.remove('not-picked-option')
//         }
//         console.log(currentOption);
//     })
// })
