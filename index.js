
/*Mouse event listner*/
var buttonArray = document.querySelectorAll(".drum");
for(var i=0;i<buttonArray.length;i++){
  buttonArray[i].addEventListener("click",function(){
    var buttonSwitch = this.innerHTML;
    console.log(buttonSwitch);
    MakeSoundKey(buttonSwitch);
    buttonAnimation(buttonSwitch);

  });
}
/*KeyBoardEventListner*/
document.addEventListener("keypress",function(event){
  MakeSoundKey(event.key);
  buttonAnimation(event.key);
});
/*Audio constructor*/
function PlatAudio(audioLocation){
  this.audioLocation = audioLocation;
  this.Play = function(){
    var audio = new Audio(audioLocation);
    audio.play();
  }
}

/*Sound Key*/
function MakeSoundKey(buttonSwitch){
  switch(buttonSwitch){
    case "w":
      var w = new PlatAudio("sounds/tom-1.mp3");
      w.Play();
      break;
    case  "a":
      var a = new PlatAudio("sounds/tom-2.mp3");
      a.Play();
      break;
    case "s":
      var s = new PlatAudio("sounds/tom-3.mp3");
      s.Play();
      break;
    case "d":
      var d = new PlatAudio("sounds/tom-4.mp3");
      d.Play();
      break;
    case "j":
      var j = new PlatAudio("sounds/snare.mp3");
      j.Play();
      break;
    case "k":
     var k = new PlatAudio("sounds/crash.mp3");
      k.Play();
      break;
    case "l":
      var l = new PlatAudio("sounds/kick-bass.mp3");
      l.Play();
      break;
    default:
      console.log(buttonSwitch);
  }
}

/*button Animation*/
function buttonAnimation(keyPressed){
  document.querySelector("."+keyPressed).classList.add("pressed");
  document.querySelector("."+keyPressed).style.color = "white";
  setTimeout(function(){document.querySelector("."+keyPressed).classList.remove("pressed");},100);
  setTimeout(function(){document.querySelector("."+keyPressed).style.color="#DA0463";},200);
}
