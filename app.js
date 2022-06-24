const loader = document.getElementById('preloader');
const page = document.querySelector('.page');

window.addEventListener('load', function(){
    loader.style.display = 'none';
    page.style.display = 'block';
});

const burger = document.querySelector('.open-menu');

burger.addEventListener('click', (e) =>{
    e.currentTarget.classList.toggle('is-active')
});

