                // Screen Button
                var numberOfButton = document.querySelectorAll('.set button').length;
                for (let i = 0; i < numberOfButton; i++) {
                    document.querySelectorAll('.set button')[i].addEventListener("click", function () {
                        var buttonValue = document.querySelectorAll('.set button')[i].innerHTML;
                       playDrum(buttonValue);
                    })
                
                }
                              // Keyboard Button
                document.addEventListener("keypress",function(event){
                    buttonValue=event.key;
                    playDrum(buttonValue);
                })
                            //Function to play drum
                function playDrum(buttonValue) {
                    switch (buttonValue) {
                        case "w":
                            var tom1 = new Audio('./static/sounds/tom-1.mp3');
                            tom1.play();
                            
                            document.querySelectorAll('.set button')[0].classList.add('pressed');
                            setTimeout(() => {
                                document.querySelectorAll('.set button')[0].classList.remove('pressed');
                            }, 100);
                            break;
                        case "a":
                            var tom2 = new Audio('./static/sounds/tom-2.mp3');
                            tom2.play();
                            document.querySelectorAll('.set button')[1].classList.add('pressed');
                            setTimeout(() => {
                                document.querySelectorAll('.set button')[1].classList.remove('pressed');
                            }, 100);
                            break;
                        case "s":
                            var tom3 = new Audio('./static/sounds/tom-3.mp3');
                            tom3.play();
                            document.querySelectorAll('.set button')[2].classList.add('pressed');
                            setTimeout(() => {
                                document.querySelectorAll('.set button')[2].classList.remove('pressed');
                            }, 100);
                            break;
                        case "d":
                            var tom4 = new Audio('./static/sounds/tom-4.mp3');
                            tom4.play();
                            document.querySelectorAll('.set button')[3].classList.add('pressed');
                            setTimeout(() => {
                                document.querySelectorAll('.set button')[3].classList.remove('pressed');
                            }, 100);
                            break;
                        case "j":
                            var crash = new Audio('./static/sounds/crash.mp3');
                            crash.play();
                            document.querySelectorAll('.set button')[4].classList.add('pressed');
                            setTimeout(() => {
                                document.querySelectorAll('.set button')[4].classList.remove('pressed');
                            }, 100);
                            break;
                        case "k":
                            var snare = new Audio('./static/sounds/snare.mp3');
                            snare.play();
                            document.querySelectorAll('.set button')[5].classList.add('pressed');
                            setTimeout(() => {
                                document.querySelectorAll('.set button')[5].classList.remove('pressed');
                            }, 100);
                            break;
                        case "l":
                            var kick = new Audio('./static/sounds/kick-bass.mp3');
                            kick.play();
                            document.querySelectorAll('.set button')[6].classList.add('pressed');
                            setTimeout(() => {
                                document.querySelectorAll('.set button')[6].classList.remove('pressed');
                            }, 100);
                            break;
                        default:
                            break;
                    }
                }