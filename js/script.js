"use strict"

const hamburgerItem = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const closeNavMenu = document.querySelector('.fa-times');

hamburgerItem.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerEl.classList.toggle('active');
});

closeNavMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburgerEl.classList.remove('active');
})
