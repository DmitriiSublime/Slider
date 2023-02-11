const sliderLine =  document.querySelector('.slider-line'),
    prevButton = document.querySelector('.left_arrow'),
    nextButton = document.querySelector('.right_arrow'),
    dots = document.querySelectorAll('.dot'),
    jsBtn = document.querySelector('.js-btn');
let position = 0,
    dotIndex = 0,
    wordIndex = 0;

//Function
const nextSlide = () => {
    if (position < (dots.length - 1) * 679) {
        position += 679
        dotIndex++
    } else {
        position = 0
        dotIndex = 0
    }   
    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
}

const prevSlide = () => {
    if (position > 0) {
        position -= 679
        dotIndex--
    } else {
        position = (dots.length - 1) * 679
        dotIndex = (dots.length - 1)
    }
    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
}

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[index].classList.add('active')
}

//EventListeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

dots.forEach( (dot, index) => {
    dot.addEventListener('click', () => {
        position = 679 * index
        sliderLine.style.left = -position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
    })
})

setInterval( () => {
    nextSlide()
}, 3000)
