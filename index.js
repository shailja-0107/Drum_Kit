for (var i=0;i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

/*instead of naming the func as handleClick, we can also use anonymous function like this:
addEventListener("click", fucntion(){
    alert("I got clicked");
});
*/

//Detecting button click on screen
function handleClick(){
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}

//Detecting key press on keyboard
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(buttonInnerHtml);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log(buttonInnerHtml);
            break;
    }
}
   
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200);
}