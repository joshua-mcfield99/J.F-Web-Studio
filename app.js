//Loading Screen
const loader = document.getElementById('preloader');
const page = document.querySelector('.page');

window.addEventListener('load', function(){
    loader.style.display = 'none';
    page.style.display = 'block';
});

//Hamburger Menu

const burger = document.querySelector('.open-menu');

burger.addEventListener('click', (e) =>{
    e.currentTarget.classList.toggle('is-active')
});

//Slider
const track = document.querySelector('.slider__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.slider--right');
const prevButton = document.querySelector('.slider--left');
const dotsNav = document.querySelector('.slider__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
 
//arrange slides next to one another
const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current__slide');
    targetSlide.classList.add('current__slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current__slide');
    targetDot.classList.add('current__slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) =>{
    if (targetIndex === 0) {
        prevButton.classList.add('is__hidden');
        nextButton.classList.remove('is__hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is__hidden');
        nextButton.classList.add('is__hidden');
    } else {
        prevButton.classList.remove('is__hidden');
        nextButton.classList.remove('is__hidden');
    }
};

//when I click left, move slides to the left
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current__slide')
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current__slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide,  prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

//when I click right, move slides to the right
nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current__slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current__slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    //move to the next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

//when I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    //what indicator was clicked?
    const targetDot = e.target.closest('button');

    if (!targetDot) return; 

    const currentSlide = track.querySelector('.current__slide');
    const currentDot = dotsNav.querySelector('.current__slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
