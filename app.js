const burger = document.querySelector('.open-menu');

burger.addEventListener('click', (e) =>{
    e.currentTarget.classList.toggle('is-active')
});
