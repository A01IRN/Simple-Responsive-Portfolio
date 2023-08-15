'use strict'

let btnNav = document.querySelector('.btn--open');
let header_el = document.querySelector('.header');
let btnClose = document.querySelector('.nav-close')
btnNav.addEventListener('click',function(){
    header_el.classList.add('nav-open');
})

btnClose.addEventListener('click',function(){
    header_el.classList.remove('nav-open');
})
