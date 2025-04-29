
document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;

  // Start automatic slideshow
  startSlideshow();

  function startSlideshow() {
    showSlides(currentSlide);
    setInterval(() => {
      changeSlide(1);
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  }

  function changeSlide(n) {
    showSlides(currentSlide += n);
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName('mySlides');
    if (n >= slides.length) {
      currentSlide = 0;
    }
    if (n < 0) {
      currentSlide = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentSlide].style.display = "block";
  }
});