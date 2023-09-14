'use script';


const sections = document.querySelectorAll('.section');
const imgs = document.querySelectorAll('.opinion-char_info-box_img');

document.querySelector('.nav').addEventListener('click',(e)=>{
    
    if (!e.target.classList.contains('sign-up') && !e.target.classList.contains('sign-in') && !e.target.classList.contains('open-nav') && !e.target.classList.contains('close-nav')) {
        e.preventDefault()
        let scroles = e.target.getAttribute('href');
        document.querySelector(scroles).scrollIntoView({behavior:"smooth"})
    }
    
})

document.querySelector('.nav').addEventListener('mouseover',(e)=>{
    if (e.target.classList.contains('nav__link')) {
        document.querySelectorAll('.nav__link').forEach((val,key)=>{
            val.style.opacity = 0.5
            document.querySelector('.nav_header-name').style.opacity = .5
        })
        e.target.style.opacity = 1
    }
})

document.querySelector('.nav').addEventListener('mouseout',(e)=>{
    document.querySelectorAll('.nav__link').forEach((val,key)=>{
        val.style.opacity = 1
        document.querySelector('.nav_header-name').style.opacity = 1
    })
})

const secObs = new IntersectionObserver((ent,obs)=>{
    if (ent[0].isIntersecting) {
        ent[0].target.classList.remove('hidden');
        obs.unobserve(ent[0].target)
    } 
},{root:null , threshold: 0.4})

sections.forEach(val=>{val.classList.add('hidden');secObs.observe(val)});

const imgsObs = new IntersectionObserver((ent,obs)=>{
    

    if (window.matchMedia("(min-width:700px)").matches) {
        if (ent[0].isIntersecting && ent[1].isIntersecting&&ent[2].isIntersecting) {

            setTimeout(() => {
                ent[0].target.classList.remove('blur');
            }, 1000);
    
            setTimeout(() => {
                ent[1].target.classList.remove('blur');
            }, 2000);
    
            setTimeout(() => {
                ent[2].target.classList.remove('blur');
            }, 3000);
    
            obs.unobserve(ent[0].target);
            obs.unobserve(ent[1].target);
            obs.unobserve(ent[2].target);
            
        }
    }

    if (window.matchMedia("(max-width:425px)").matches) {
        if (ent[0].isIntersecting) {
            setTimeout(() => {
                ent[0].target.classList.remove('blur')
            }, 1000);
            obs.unobserve(ent[0].target)
        }
    }
},{root:null,threshold:0.2});

imgs.forEach(val=>imgsObs.observe(val));




let navbar = document.querySelector('.nav__links');

let navOpenBtn = document.querySelector('.open-nav');
let navCloseBtn = document.querySelector('.close-nav');

navOpenBtn.addEventListener('click',e=>{
    navbar.classList.remove('hidden-nav');
    navCloseBtn.classList.remove('hidden-btn');
    navOpenBtn.classList.add('hidden-btn')
})

navCloseBtn.addEventListener('click',e=>{
    navbar.classList.add('hidden-nav');
    navCloseBtn.classList.add('hidden-btn');
    navOpenBtn.classList.remove('hidden-btn');
})
