let currentIndex3 = 0;
const slides3 = document.querySelectorAll('.carousel3-slide');
const carousel3Container = document.querySelector('.carousel3-container');

// Función para mover al siguiente slide
function moveSlide3(direction) {
    slides3[currentIndex3].classList.remove('active');
    currentIndex3 += direction;
    if (currentIndex3 >= slides3.length) {
        currentIndex3 = 0;
    } else if (currentIndex3 < 0) {
        currentIndex3 = slides3.length - 1;
    }
    const translateX = -currentIndex3 * 100;
    carousel3Container.style.transform = `translateX(${translateX}%)`;
    slides3[currentIndex3].classList.add('active');
}

// Función para mover el slide automáticamente cada 3 segundos
function autoSlide3() {
    moveSlide3(1);
}

// Iniciar el carrusel automático
let autoSlideInterval3 = setInterval(autoSlide3, 3000);

// Detener el carrusel al pasar el mouse sobre él
const carousel3 = document.querySelector('.carousel3');
carousel3.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval3);
});

// Reanudar el carrusel al quitar el mouse de encima
carousel3.addEventListener('mouseout', () => {
    autoSlideInterval3 = setInterval(autoSlide3, 3000);
});

// Aplicar la clase 'active' a la primera diapositiva por defecto
slides3[currentIndex3].classList.add('active');
