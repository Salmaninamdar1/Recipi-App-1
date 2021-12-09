"use strict";

let slideIndex = 1;
showSlides(slideIndex);

// funcion to control the arrow buttons events
const incrementSlides = (n) => showSlides((slideIndex = slideIndex + n));

function showSlides(s) {
  var slides = document.getElementsByClassName("recipeSlide"); //taking all doc with class name recipeSlide which is 3 for 3 rows

  //   in this case if s is 4 but slide length is 3 then it should the 1st row recipe
  if (s > slides.length) slideIndex = 1;

  if (s < 1) slideIndex = slides.length;
  //whenever incrementSlides function is  invoked making all slides display none
  for (var i = 0; i <= slides.length - 1; i++) {
    slides[i].style.display = "none";
  }
  console.log("sl", slideIndex, "s", s);

  slides[slideIndex - 1].style.display = "block";
}
