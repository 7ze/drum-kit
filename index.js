
// Finding the number of Drum buttons
let numberOfDrumButtons = document.querySelectorAll("button.drum").length;

// Adding click event to such buttons
for (let i = 0; i < numberOfDrumButtons; ++i) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    let buttonClass = this.innerHTML;
    buttonAnimation(buttonClass);
    makeSound(buttonClass);
  });
}

// Adding key down event
document.addEventListener("keydown", function(event) {
  let keyPressed = event.key;
  buttonAnimation(keyPressed);
  makeSound(keyPressed);
});

// sound generator
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      let kickbass = new Audio("sounds/tom-1.mp3");
      kickbass.play();
      break;

    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log("Key pressed - " + keyPressed);
      break;
  }
}

function buttonAnimation (key){
  let buttonPressed = document.querySelector('.' + key);
  buttonPressed.classList.add('pressed');
  setTimeout(function(){
    buttonPressed.classList.remove('pressed');
  },100);
}