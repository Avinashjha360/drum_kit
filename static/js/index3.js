var audio1=new Audio('sounds/tom-1.mp3');
var audio2=new Audio('sounds/tom-2.mp3');
var audio3=new Audio('sounds/tom-3.mp3');
var audio4=new Audio('sounds/tom-4.mp3');
var audio5=new Audio('sounds/crash.mp3');
var audio6=new Audio('sounds/snare.mp3');
var audio7=new Audio('sounds/kick-bass.mp3');
var a=[audio1,audio2,audio3,audio4,audio5,audio6,audio7];
for (let i = 0; i < 7; i++) {
    document.querySelectorAll('.set button')[i].addEventListener("click",function () {
        a[i].play();
    })
    
}