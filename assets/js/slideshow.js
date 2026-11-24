document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".slide-dots");
  const nextButton = document.querySelector(".slide-next");
  const prevButton = document.querySelector(".slide-prev");

  if (!slides.length || !dotsContainer) return;

  let currentSlide = 0;
  let timer;

  // Create navigation dots
  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "slide-dot";
    dot.setAttribute("aria-label", "Show image " + (index + 1));

    dot.addEventListener("click", function () {
      showSlide(index);
      restartTimer();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".slide-dot");

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function restartTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
  }

  nextButton.addEventListener("click", function () {
    nextSlide();
    restartTimer();
  });

  prevButton.addEventListener("click", function () {
    prevSlide();
    restartTimer();
  });

  showSlide(0);
  restartTimer();

});
