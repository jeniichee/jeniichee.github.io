// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('hello!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('nice to meet you!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('my name is jen.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('i am currently studying cs and neuro.')
    .pauseFor(2500)
    .deleteChars(32)
    .typeString('interested in ai and machine learning.')
    .pauseFor(2500)
    .deleteChars(38)
    .typeString('an aspiring software engineer.')
    .pauseFor(2500)
    .deleteChars(30)
    .typeString('also a coffee enthusiast.')
    .pauseFor(2500)
    .deleteChars(25)
    .typeString('a proud mom to a six year old pomsky.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('above all, <strong>i am a daughter of a chef<strong>.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('thank you for visiting! enjoy your stay :)')
    .pauseFor(2500)
    .deleteAll()
    .start();

// light mode
function light() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }

// open accordian 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

  