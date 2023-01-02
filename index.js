// Detecting Mouse Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

        var buttomInnerHTML = this.innerHTML;
        makeSound(buttomInnerHTML);
        buttonAnimation(buttomInnerHTML);
    });
}

// Detecting Key Press
document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {

    switch (key){
        case 'a' : {
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        }
        case 's' : {
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        }
        case 'd' : {
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        }
        case 'f' : {
            var tom3 = new Audio("sounds/tom-4.mp3")
            tom3.play();
            break;
        }
        case 'j' : {
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        }
        case 'k' : {
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        }
        case 'l' : {
            var kick_bass = new Audio("sounds/kick-bass.mp3")
            kick_bass.play();
            break;
        }

        default : console.log(buttomInnerHTML);

    }
}

function buttonAnimation (currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}
