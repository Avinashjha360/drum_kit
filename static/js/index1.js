var audio1=new Audio('sounds/tom-1.mp3');
var audio2=new Audio('sounds/tom-2.mp3');
var audio3=new Audio('sounds/tom-3.mp3');
var audio4=new Audio('sounds/tom-4.mp3');
var audio5=new Audio('sounds/crash.mp3');
var audio6=new Audio('sounds/snare.mp3');
var audio7=new Audio('sounds/kick-bass.mp3');
var a=[audio1,audio2,audio3,audio4,audio5,audio6,audio7];
document.querySelectorAll('.set button')[0].addEventListener("click",function(){
    audio1.play();
})
document.querySelectorAll('.set button')[1].addEventListener("click",function(){
    audio2.play();
})
document.querySelectorAll('.set button')[2].addEventListener("click",function(){
    audio3.play();
})
document.querySelectorAll('.set button')[3].addEventListener("click",function(){
    audio4.play();
})
document.querySelectorAll('.set button')[4].addEventListener("click",function(){
    audio5.play();
})
document.querySelectorAll('.set button')[5].addEventListener("click",function(){
    audio6.play();
})
document.querySelectorAll('.set button')[6].addEventListener("click",function(){
    audio7.play();
})