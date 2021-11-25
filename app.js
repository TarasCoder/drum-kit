let numberOfDrums = document.querySelectorAll(".drum");
for (let i = 0; i < numberOfDrums.length; i++) {
  numberOfDrums[i].addEventListener("click", function () {
    checkKey(this.innerHTML);
    addAnimation(this.innerHTML);
  });
}
document.addEventListener("keypress", function (ev) {
  checkKey(ev.key);
  addAnimation(ev.key);
});

function checkKey(key) {
  switch (key) {
    case "w":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("DEFAULT CASE!");
      break;
  }
}
function addAnimation(element){
    let el = document.querySelector("." + element);
    el.classList.add("pressed");
    setTimeout(function(){el.classList.remove("pressed")},100)
}