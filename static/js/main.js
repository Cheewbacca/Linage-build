const loginBtn = document.getElementsByClassName('signUp');
const signUp = document.getElementById('signUp');

// show login popup

[...loginBtn].forEach( element => {
    element.addEventListener("click", (e)=>{
        e.preventDefault();
        signUp.style.display = 'flex';
    });
});

[...loginBtn][0].addEventListener("click", function(e){
    e.preventDefault();
    signUp.style.display = 'flex';
    getLogin.classList.remove('active');
    getLogin.classList.remove('active_entry');
    getSignUp.classList.add('active');
    getSignUp.classList.add('active_entry');
    mainBarForm[0].style.display = 'block';
    mainBarForm[1].style.display = 'none';
});

[...loginBtn][1].addEventListener("click", function(e){
    e.preventDefault();
    signUp.style.display = 'flex';
    getSignUp.classList.remove('active');
    getSignUp.classList.remove('active_entry');
    getLogin.classList.add('active');
    getLogin.classList.add('active_entry');
    mainBarForm[1].style.display = 'block';
    mainBarForm[0].style.display = 'none';
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

const downloadW1 = document.getElementById('downloadW1');
const downloadW2 = document.getElementById('downloadW2');

const requirements = [...document.getElementsByClassName('download-main')];

downloadW1.addEventListener('click', function(e) {
    e.preventDefault();
    downloadW2.classList.remove('active-download-world');
    this.classList.add('active-download-world');
    requirements[0].style.display = 'block';
    requirements[1].style.display = 'none';
});

downloadW2.addEventListener('click', function(e) {
    e.preventDefault();
    downloadW1.classList.remove('active-download-world');
    this.classList.add('active-download-world');
    requirements[1].style.display = 'block';
    requirements[0].style.display = 'none';
});

const getSignUp = document.getElementById('getSignUp');
const getLogin = document.getElementById('getLogin');

const mainBarForm =[...document.getElementsByClassName('form')];

getSignUp.addEventListener('click', function(e) {
    e.preventDefault();
    getLogin.classList.remove('active');
    getLogin.classList.remove('active_entry');
    this.classList.add('active');
    this.classList.add('active_entry');
    mainBarForm[0].style.display = 'block';
    mainBarForm[1].style.display = 'none';
});

getLogin.addEventListener('click', function(e) {
    e.preventDefault();
    getSignUp.classList.remove('active');
    getSignUp.classList.remove('active_entry');
    this.classList.add('active');
    this.classList.add('active_entry');
    mainBarForm[1].style.display = 'block';
    mainBarForm[0].style.display = 'none';
});

const signUpSubmitBtn = document.getElementById('confirm');

signUpSubmitBtn.parentElement.addEventListener( "submit", function(e){
    e.preventDefault();
    if (document.getElementById('pass').value !== document.getElementById('repeat_pass').value){
        alert('Passwords are not same');
    }else {
        this.submit();
    }
});