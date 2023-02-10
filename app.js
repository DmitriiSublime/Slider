const sliderLine =  document.querySelector('.slider-line'),
    prevButton = document.querySelector('.left_arrow'),
    nextButton = document.querySelector('.right_arrow'),
    dots = document.querySelectorAll('.dot');
let position = 0,
    dotIndex = 0;

//Function
const nextSlide = () => {
    if (position < (dots.length - 1) * 679) {
        position += 679
    } else {
        position = 0
    }   
    sliderLine.style.left = -position + 'px'
}

const prevSlide = () => {
    if (position > 0) {
        position -= 679
    } else {
        position = (dots.length - 1) * 679
    }
    sliderLine.style.left = -position + 'px'
}

//EventListeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);








// document.querySelector('.right_arrow').addEventListener('click', () => {
//     position = position + 679;
//     if (position > 1358) {
//         position = 0;
//     }
//     sliderLine.style.left = -position + 'px';
// });

// document.querySelector('.left_arrow').addEventListener('click', () => {
//     position = position - 679;
//     if (position < 0) {
//         position = 1358;
//     }
//     sliderLine.style.left = -position + 'px';
// });