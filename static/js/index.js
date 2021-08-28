                // Screen Button
var numberOfButton = document.querySelectorAll('.set button').length;
for (let i = 0; i < numberOfButton; i++) {
    document.querySelectorAll('.set button')[i].addEventListener("click", function () {
        var buttonValue = document.querySelectorAll('.set button')[i].innerHTML;
       playDrum(buttonValue);
       addAnimation(buttonValue);
    })

}
              // Keyboard Button
document.addEventListener("keypress",function(event){
    
    playDrum(event.key);
    addAnimation(event.key);
})
            //Function to play drum
function playDrum(buttonValue) {
    switch (buttonValue) {
        case "w":
            var tom1 = new Audio('./static/sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./static/sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./static/sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./static/sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('./static/sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var snare = new Audio('./static/sounds/snare.mp3');
            snare.play();
            break;
        case "l":
            var kick = new Audio('./static/sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            break;
    }
}

function addAnimation(keyValue){
    document.querySelector('.'+keyValue).classList.add('pressed');
    setTimeout(() => {
        document.querySelector('.'+keyValue).classList.remove('pressed');
    }, 100);
}