const loginBtn = document.getElementsByClassName('signUp');
const signUp = document.getElementById('signUp');

// show login popup

[...loginBtn].forEach( element => {
    element.addEventListener("click", (e)=>{
        e.preventDefault();
        signUp.style.display = 'flex';
    });
});

const closeLogin = document.getElementById('closeLogin');

// close login popup

closeLogin.addEventListener("click", () => {
    signUp.style.display = 'none';
});

const download = document.getElementById('download');
const downloadContent = document.getElementById('downloadContent');
let isContentVisible = false;

// close/show popup for download

download.addEventListener("click", (e) => {
    e.preventDefault();
    isContentVisible = !isContentVisible;
    if (isContentVisible) { 
        downloadContent.style.display = 'block';
    }else {
        downloadContent.style.display = 'none';
    }
});

const slides = document.getElementsByClassName('slide'); // slides
const buttons = document.getElementsByClassName('button'); // buttons

// remove active class from button
function removeActive(node, className){
    [...node].forEach( btn => { btn.classList.remove(className); });
}

// hide slide
function hide(node){
    [...node].forEach( el => { el.style.display = 'none'; });
}

// show slide
function show(className){
    [...document.getElementsByClassName(className)].forEach( slide => slide.style.display = 'flex' );
}

let slidesNames = ['bt-1', 'bt-2', 'bt-3'];

// hide all slides before script started
[...slides].forEach( (slide, index) => {
    if (index) {
        slide.style.display = 'none';
    }
});

// if button clicked, make it active and change slide 

[...buttons].forEach( btn => {
    btn.addEventListener('click', function() {
        removeActive(buttons, 'active-slide');
        this.classList.add('active-slide');
        let classes = this.classList.value;
        slidesNames.forEach( name => {
            if (classes.indexOf(name) > -1 ){
                hide(slides);
                show(name);
            }
        });
    });
});