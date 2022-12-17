main = document.querySelector('.main')
navlist = document.querySelector('.navlist')
navbar = document.querySelector('.navbar')
search = document.querySelector('.search')

main.addEventListener('click',()=> {
    navlist.classList.toggle('op');
    search.classList.toggle('op');
    navbar.classList.toggle('nav-h');

})