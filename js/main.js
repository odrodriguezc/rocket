'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
const TINY = 0;
const NORMAL = 1;
const BIG = 2;

let dom = {};
let compte = 10;
let intervalID = null;
let main;




/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function startCompte (){
    if (intervalID === null){
        intervalID = setInterval(compteRebour, 1000);
    } else{
        stopCompte();   
    }
    dom.firingButton.classList.toggle('disabled');
    dom.cancelButton.classList.toggle('disabled');
}

function compteRebour (){
    if (compte > 0){
        compte--;
        dom.rocket.src = "images/rocket2.gif";
    } else{
        stopCompte();
        dom.rocket.src = "images/rocket3.gif";
        dom.rocket.classList.toggle('tookOff');
    }
    dom.billboard.innerText = compte;
}

function abort(){
    stopCompte();
    dom.firingButton.classList.toggle('disabled');
    dom.cancelButton.classList.toggle('disabled');
    dom.rocket.src = "images/rocket1.png";
    dom.rocket.classList.remove = ('tookOff');
}

function createStars(){
    for (let i = 0; i <= 150; i++){
        let  newStar = document.createElement('i');

        newStar.classList.add('star');
        newStar.classList.add('fas');
        newStar.classList.add('fa-meteor');
    
        switch (getRandomInteger(0,2)){
            case 0:
                newStar.classList.add('tiny');
            break;
            case 1:
                newStar.classList.add('normal');
            break;
            default:
                newStar.classList.add('big');
        }
    
        starPosition(newStar);
 
        let currentStar = document.querySelector('i');
        document.body.insertBefore(newStar, currentStar);   
    }
}


function starPosition(newStar){
    let top =  getRandomInteger(0, 100) + "%";
    let bottom =  getRandomInteger(0, 100) + "%";
    let left =  getRandomInteger(0, 100) + "%";
    let right =  getRandomInteger(0, 100) + "%";

    newStar.style.top = top;
    newStar.style.bottom = bottom;
    newStar.style.left = left;
    newStar.style.right = right;
}



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
document.addEventListener('DOMContentLoaded', function(){

    dom.billboard = document.querySelector('#billboard span');
    dom.firingButton = document.querySelector('#firing-button');
    dom.cancelButton = document.querySelector('#cancel-button');
    dom.rocket = document.querySelector('#rocket');
    dom.smoke = document.querySelector('#smoke');
    dom.smoke2 = document.querySelector('#smoke2');
    main = document.querySelector('main');

    dom.firingButton.addEventListener('click', startCompte);
    dom.cancelButton.addEventListener('click', abort);

    createStars();
 
});