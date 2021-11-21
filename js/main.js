'use strict';

// sp-menu
const menu= document.getElementById('menu');
const mask = document.getElementById('mask');;
const modal = document.getElementById('modal');
const close = document.getElementById('close');

menu.classList.remove('hidden');
mask.classList.add('hidden');
modal.classList.add('hidden');

menu.addEventListener('click',()=>{
    menu.classList.add('hidden');
    mask.classList.remove('hidden');
    modal. classList.remove('hidden');
});

close.addEventListener('click',()=>{
    menu.classList.remove('hidden');
    mask.classList.add('hidden');
    modal.classList.add('hidden');
});

// mainvisual
const pics_src =["img/adpDSC_4393.jpg",
"img/forest.jpg","img/adpDSC_4489.jpg"];

let num = -1;

function slideShow_timer () {
    if (num === 2) {
        num = 0
    }else {
        num++;
    }

    document.getElementById('mainvisual').src=pics_src[num];
}

setInterval(slideShow_timer,1000);