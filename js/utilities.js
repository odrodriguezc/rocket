'use strict';


function stopCompte()
{
    clearInterval(intervalID);
    compte = 10;
    intervalID = null
}


function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * A TESTER
 * @param {objet} element html contentant l'icone <i>
 * @param {*class css} class1 identifient de l'icone chez font 
 * @param {*class css} class2 
 */
function captureIcons(element, class1, class2){
    element.classList.add(class1);
    element.classList.add(class2);
}

