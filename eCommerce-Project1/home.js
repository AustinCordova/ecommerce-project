var slideIndex = 0;
var slideInterval;

function restartTimer() {
  clearInterval(slideInterval);

  slideInterval = setInterval(nextSlide, 5000);
}
function showSlide(n) {
  var slides = document.getElementsByClassName("mySlides");
  console.log(n);
  // if n > 3 than set slides back to beginning 
  if (n > slides.length - 1) {slideIndex = 0}
  // n < 0 than set slides to the last slide
  if (n < 0) {slideIndex = slides.length - 1}
  console.log('slideIndex', slideIndex);

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
  restartTimer();
}
function previousSlide() {
  slideIndex -= 1;
  showSlide(slideIndex);
}
function nextSlide(){
  slideIndex += 1;
  showSlide(slideIndex);
  console.log('nextSlide');
}

showSlide(slideIndex);
