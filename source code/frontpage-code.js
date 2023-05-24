let search = document.querySelector('#search-bar');
let searchbox = document.querySelector('.search-box');
let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar');

search.onclick = () => {
    searchbox.classList.toggle('active');
}
menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}
