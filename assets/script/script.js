// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('hello!')
    .pauseFor(1000)
    .deleteAll()

    .typeString('nice to meet you!')
    .pauseFor(1500)
    .deleteAll()

    .typeString('my name is jen.')
    .pauseFor(1500)
    .deleteAll()

    .typeString('i am studying cs and neuro.')
    .pauseFor(1500)
    .deleteAll() 

    .typeString('i am also interested in bioinformatics and design.')
    .pauseFor(1500)
    .deleteAll() 

    .typeString('my work serves to empower others and enhance lives.')
    .pauseFor(1500)
    .deleteAll()

    .typeString('in my free time, i like to take long walks with my puppy.')
    .pauseFor(1500)
    .deleteAll()

    .typeString('i am also a coffee enthusiast.')
    .pauseFor(1500)
    .deleteAll()

    .typeString('i find peace in selfcare (gym, skincare, cosmetics).')
    .pauseFor(1500)
    .deleteAll()

    .typeString('thank you for visiting!')
    .pauseFor(1500)
    .deleteAll()

    .typeString('enjoy the rest of your day :)')
    .pauseFor(1500)
    .deleteAll()

    .start();

// dark mode

// function dark() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }

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

// navbar scroll 

window.addEventListener("scroll", () => scroll);

function scroll() {
  const header = document.querySelector("#header").offsetHeight;
  const navbar = document.querySelector(".nav")
  
  if (window.pageYOffset >= header) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

  