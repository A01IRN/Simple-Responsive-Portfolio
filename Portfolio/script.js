'use strict'

let btnNavEl = document.querySelector('.nav__mobile--open');
let headerEl = document.querySelector('.nav');
let btnNavClose = document.querySelector('.nav__mobile--close');

btnNavEl.addEventListener('click',function(){
    headerEl.classList.add('nav--open');
})

btnNavClose.addEventListener('click',function() {
    headerEl.classList.remove('nav--open')
})