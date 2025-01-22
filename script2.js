let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Función para mover el slide
function moveSlide(n) {
    // Elimina la clase 'active' de todas las diapositivas
    slides.forEach(slide => slide.classList.remove('active'));

    currentIndex += n;

    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Vuelve al primer slide si excede el último
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Va al último si es negativo
    }

    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

    // Añadir la clase 'active' a la diapositiva actual para aplicar el zoom
    slides[currentIndex].classList.add('active');
}

// Función para mover el slide automáticamente cada 3 segundos
function autoSlide() {
    moveSlide(1); // Mover al siguiente slide
}

// Iniciar el carrusel automático
let autoSlideInterval = setInterval(autoSlide, 1500); // Cambia de imagen cada 3 segundos

// Detener el carrusel al pasar el mouse sobre él
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

// Reanudar el carrusel al quitar el mouse de encima
carousel.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(autoSlide, 1000);
});

// Aplicar la clase 'active' a la primera diapositiva por defecto
slides[currentIndex].classList.add('active');


    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');

    // Cambia entre play y pause
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.classList.remove('paused');
        } else {
            audio.pause();
            playPauseBtn.classList.add('paused');
        }
    });

    // Sincroniza el botón con el estado del audio
    audio.addEventListener('play', () => {
        playPauseBtn.classList.remove('paused');
    });

    audio.addEventListener('pause', () => {
        playPauseBtn.classList.add('paused');
    });