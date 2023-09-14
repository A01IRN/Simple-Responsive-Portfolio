'use strict';

const slides = document.querySelectorAll('.img');
let curSlide = 0;
const maxSlide = slides.length
slides.forEach((val,key)=> val.style.transform = `translateX(${150*key}%)`)


document.querySelector('.img-box_btn--right').addEventListener('click',e=>{
    if (curSlide == maxSlide-1) {
        curSlide = 0;
        slides.forEach((val,key)=> {
            val.style.transform = `translateX(${(key-curSlide) * 150}%)`;
        })
        document.querySelectorAll('.dots__dot').forEach(val=>{
            val.classList.remove('dots__dot--active');
            if (val.dataset.slide == curSlide) {
                val.classList.add('dots__dot--active')
            }});
    }else{
        curSlide++
        slides.forEach((val,key)=> {
            val.style.transform = `translateX(${(key-curSlide) * 150}%)`;
        })
        document.querySelectorAll('.dots__dot').forEach(val=>{
            val.classList.remove('dots__dot--active');
            if (val.dataset.slide == curSlide) {
                val.classList.add('dots__dot--active')
            }});
    }
})


document.querySelector('.img-box_btn--left').addEventListener('click',e=>{
    if (curSlide == 0) {
        curSlide = maxSlide -1;
        slides.forEach((val,key)=>{
            val.style.transform = `translateX(${150*(key-curSlide)}%)`;
        })
        document.querySelectorAll('.dots__dot').forEach(val=>{
            val.classList.remove('dots__dot--active');
            if (val.dataset.slide == curSlide) {
                val.classList.add('dots__dot--active')
            }});

    } else{
        curSlide--;
        slides.forEach((val,key)=>{
            val.style.transform = `translateX(${150*(key-curSlide)}%)`;
        })
        document.querySelectorAll('.dots__dot').forEach(val=>{
            val.classList.remove('dots__dot--active');
            if (val.dataset.slide == curSlide) {
                val.classList.add('dots__dot--active')
            }});
    }
})


slides.forEach((val,key)=> document.querySelector('.dots').insertAdjacentHTML("beforeend",`<button class = 'dots__dot' data-slide = ${key}></button>`));

document.querySelector('.dots__dot').classList.add('dots__dot--active')


document.querySelector('.dots').addEventListener('click',e=>{
    if (e.target.classList.contains('dots__dot')) {
        curSlide = e.target.dataset.slide;
        document.querySelectorAll('.dots__dot').forEach((val,key)=> {
            val.classList.remove('dots__dot--active');
            if (val.dataset.slide == curSlide) {
                val.classList.add('dots__dot--active');
            }
        })

        slides.forEach((val,key)=> val.style.transform = `translateX(${(key - curSlide) *150}%)`);
    }
    
})



if (window.matchMedia('(max-width : 427px)').matches) {
    document.querySelectorAll('.input').forEach((val,key)=> {
        if (key < 2) {
            val.insertAdjacentHTML("afterend",'<br>')
        }
    })
}
