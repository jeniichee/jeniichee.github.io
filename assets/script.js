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

    .typeString('i am a software engineer.')
    .pauseFor(1500)
    .deleteAll() 

    .typeString('with core strengths in backend, frontend, & fullstack.')
    .pauseFor(1500)
    .deleteAll()

    .typeString('i recently graduated from northeastern uni.')
    .pauseFor(1500)
    .deleteAll()
    
    .typeString('with keen interest in biotech & healthcare,')
    .pauseFor(1500)
    .deleteAll()
    
    .typeString('i am currently seeking full-time opportunities')
    .pauseFor(1500)
    .deleteAll()

    .typeString('in any industry')
    .pauseFor(1500)
    .deleteAll()

    .typeString('where i can apply my analytical & creative skills')
    .pauseFor(1500)
    .deleteAll()

    .typeString('to create scalable and peformant software')
    .pauseFor(1500)
    .deleteAll()

    .typeString('that serves to empower and connect the people.')
    .pauseFor(1500)
    .deleteAll()

    .typeString('please feel free to reach out to me.')
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
window.addEventListener("scroll", function () {
  const headerHeight = document.querySelector("#header").offsetHeight;
  const navbar = document.querySelector(".nav");

  if (window.pageYOffset >= headerHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

  