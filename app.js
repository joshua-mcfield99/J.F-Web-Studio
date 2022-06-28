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
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel--right');
const prevButton = document.querySelector('.carousel--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
console.log(slideSize);