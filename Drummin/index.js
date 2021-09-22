function makeSound(key){
    var soundfile;

    switch(key){
        case 'w' :
            soundfile="tom-1";
            break;

        case 'a' :
            soundfile="tom-2";
            break;

        case 's' :
            soundfile="tom-3";
            break;

        case 'd' :
            soundfile="tom-4";
            break;

        case 'j' :
            soundfile="snare";
            break;

        case 'k' :
            soundfile="crash";
            break;

        case 'l' :
            soundfile="kick-bass";
            break;
    }

    var sound = new Audio("sounds/"+soundfile+".mp3");
    sound.play();

}

function animationBtn(currentKey){

    var activeBtn = document.querySelector("." + currentKey);

    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}

var drums = document.querySelectorAll(".drum");
var numberOfDrums = drums.length;

for (var i=0; i<numberOfDrums; i++){
    drums[i].addEventListener("click", function(){
        var keyPressed = this.innerHTML;
        console.log("hi");
        makeSound(keyPressed);
        animationBtn(keyPressed);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animationBtn(event.key);
});