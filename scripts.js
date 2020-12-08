'use strict';

// NAVBAR : MOVE TO THE LINKED SECTION + MENU TURNED
const navbarMenu = document.querySelector(".navbar-nav");

navbarMenu.addEventListener('click', (event) => {
    const  target = event.target,
           link = target.dataset.link,
           items = event.currentTarget.children;

    if (link == null) {
        return;
    } 
    
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'}); 
    
    for (var i=0;i<items.length;i++) {
        items[i].classList.remove('active');
    }

    target.classList.add('active');
    setTimeout(function() {
        target.classList.remove('active')
    },3000);

})



// TURNING ARROW-UP WHEN SCROLLING DOWN

const arrowUp = document.getElementById('arrow__up');
arrowUp.style.display = 'none';

document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight/2) {
        arrowUp.style.display = 'flex';
    } else {
        arrowUp.style.display = 'none';
    }
});


// BRIGHT/DARK MODE EFFECT
// variables
const modeSwitch = document.querySelector('#brightmode__button');
const body = document.querySelector('body');
const navBg = document.querySelector('#navbar__shadow');
const footer = document.querySelector('#footer')
const menuCards = document.querySelectorAll('#menu__card');
const toggler = document.querySelector('#navbar__toggler__btn');

const textsToSwitch = document.querySelectorAll('.brightmode');
const bgsToSwitch = document.querySelectorAll('.brightmode__bg');
const blackTexts = document.querySelectorAll('.black');
const blackBgs = document.querySelectorAll('.black__bg');
const whiteTexts = document.querySelectorAll('.white');

var mode = 'bright';
var isTogglerClicked = false;

toggler.addEventListener('click', function() {
    if (!isTogglerClicked) {
        navBg.style.height = '37vh'
        isTogglerClicked = true;
    } else {
        navBg.style.height = '80px';
        isTogglerClicked = false;
    }
});


// define functions 
function dark() {
    console.log(mode);
    mode = 'dark';
    body.classList.add('body__black');
    navBg.classList.remove('brightmode__nav');
    navBg.classList.add('darkmode__nav');
    footer.style.background = 'var(--Green)';


    for (var i = 0; i<textsToSwitch.length;i++) {
        textsToSwitch[i].style.color = 'var(--White)';
    }
    for (var i = 0; i<bgsToSwitch.length;i++) {
        bgsToSwitch[i].style.background = 'var(--Lime)';
        bgsToSwitch[i].style.color = 'var(--Black)';
    }
    for (var i = 0; i<blackTexts.length;i++) {
        blackTexts[i].style.color = 'var(--White)';
    }
    for (var i = 0; i<blackBgs.length;i++) {
        blackBgs[i].style.background = 'var(--Lime)';
    }
    for (var i = 0; i<whiteTexts.length;i++) {
        whiteTexts[i].style.color = 'var(--Black)';
    }
    for (var i = 0; i<menuCards.length;i++) {
        menuCards[i].style.background = 'rgb(50,50,50)';
    } 
}

function bright() {
    console.log(mode);
    mode = 'bright';
    body.classList.remove('body__black');
    navBg.classList.add('brightmode__nav');
    navBg.classList.remove('darkmode__nav');
    footer.style.background = 'var(--Black)';


    for (var i = 0; i<textsToSwitch.length;i++) {
        textsToSwitch[i].style.color = 'var(--Green)';
    }
    for (var i = 0; i<bgsToSwitch.length;i++) {
        bgsToSwitch[i].style.background = 'var(--Green)';
        bgsToSwitch[i].style.color = 'var(--white)';
    }
    for (var i = 0; i<blackTexts.length;i++) {
        blackTexts[i].style.color = 'var(--Black)';
    }
    for (var i = 0; i<blackBgs.length;i++) {
        blackBgs[i].style.background = 'var(--Black)';
    }
    for (var i = 0; i<whiteTexts.length;i++) {
        whiteTexts[i].style.color = 'var(--White)';
    }
    for (var i = 0; i<menuCards.length;i++) {
        menuCards[i].style.background = 'var(--Black)';
    } 
}



modeSwitch.addEventListener('click', function() {
    if (mode === 'bright') {
        dark();
    } else if (mode === 'dark') {
        bright();
    }
})


