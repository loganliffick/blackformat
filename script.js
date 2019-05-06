// js //

window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

let bigLetterReveal = {
    distance: '10%',
    origin: 'bottom',
    delay: 600,
    duration: 800,
    easing: 'ease-in-out',
    opacity: 0
};

ScrollReveal().reveal('.bigLetter', bigLetterReveal);

let h1SlideUp = {
    distance: '10%',
    origin: 'bottom',
    delay: 500,
    duration: 700,
    easing: 'ease',
    opacity: 0
};

ScrollReveal().reveal('.slide-up', h1SlideUp);

let separatorFade = {
    distance: '20%',
    origin: 'left',
    delay: 800,
    duration: 700,
    easing: 'ease',
    opacity: 0
};

ScrollReveal().reveal('.separator', separatorFade);

let paragraphSlideUp = {
    distance: '20%',
    origin: 'bottom',
    delay: 600,
    duration: 700,
    easing: 'ease',
    opacity: 0
};

ScrollReveal().reveal('.pSlide-up', paragraphSlideUp);

let canvasArtSlideUp = {
    distance: '0%',
    origin: 'bottom',
    delay: 1200,
    duration: 700,
    easing: 'ease',
    opacity: 0
};

ScrollReveal().reveal('.canvasArt', canvasArtSlideUp);


