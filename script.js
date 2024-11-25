// Controle de slides
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const carousel = document.getElementById('carousel');
const arrows = document.querySelectorAll('.arrow');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });

  // Ocultar setas no último slide
  if (index === slides.length - 1) {
    arrows.forEach(arrow => (arrow.style.display = 'none'));
  } else {
    arrows.forEach(arrow => (arrow.style.display = 'block'));
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Inicializar
showSlide(currentSlide);
