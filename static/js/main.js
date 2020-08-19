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
    e.stopPropagation();
    isContentVisible = !isContentVisible;
    if (isContentVisible) { 
        downloadContent.style.display = 'block';
    }else {
        e.preventDefault();
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

function addVisible(node, className){
    [...document.getElementsByClassName(node)].forEach( btn => { btn.classList.add(className); });
}

function removeVisible(node, className){
    [...document.getElementsByClassName(node)].forEach( btn => { btn.classList.remove(className); });
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

const rankingWorlds = document.getElementsByClassName('world');

const activeWorld = document.getElementById('active-world');

let worldLists = ['world-1' , 'world-2'];

[...rankingWorlds].forEach( world => {
    world.addEventListener("click", function(e) {
        e.preventDefault();
        let classes = this.classList.value;
        worldLists.forEach( list => {
            if (classes.indexOf(list) > -1 ){
                addVisible( list ,'visible');
            } else {
                removeVisible( list ,'visible');
            }
        });
    });
});

const wrld1 = document.getElementById('wrld1');
const wrld2 = document.getElementById('wrld2');
const worldInfo = [...document.getElementsByClassName('world-info')];

wrld1.addEventListener('click', function(e) {
    e.preventDefault();
    wrld2.classList.remove('active_world');
    this.classList.add('active_world');
    worldInfo[1].classList.remove('visible');  
    worldInfo[0].classList.add('visible');
});

wrld2.addEventListener('click', function(e) {
    e.preventDefault();
    wrld1.classList.remove('active_world');
    this.classList.add('active_world');
    worldInfo[0].classList.remove('visible');  
    worldInfo[1].classList.add('visible');
});