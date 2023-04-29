"use strict"

const hamburgerItem = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.nav');

hamburgerItem.addEventListener('click', () => {
    navMenu.classList.toggle('active')
});
