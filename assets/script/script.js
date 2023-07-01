// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('hello!')
    .pauseFor(1500)
    .deleteAll()

    .typeString('nice to meet you!')
    .pauseFor(1500)
    .deleteAll()

    .typeString('my name is jen.')
    .pauseFor(1500)
    .deleteAll()

    .typeString('i study cs and neuro.')
    .pauseFor(1500)
    .deleteAll() 

    .typeString('i develop software')
    .pauseFor(1500)
    .deleteAll()

    .typeString('to empower others')
    .pauseFor(1500)
    .deleteAll()

    .typeString('to enhance lives.')
    .pauseFor(1500)
    .deleteAll()

    .typeString('i like to cook.')
    .pauseFor(1500)
    .deleteAll()

    .typeString('i am also a coffee enthusiast.')
    .pauseFor(1500)
    .deleteChars(25)

    .typeString('a proud mom to a six year old pomsky.')
    .pauseFor(1500)
    .deleteAll()

    .typeString('thank you for visiting!')
    .pauseFor(1500)
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

  