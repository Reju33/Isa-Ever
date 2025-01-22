// Configura la fecha y hora límite de la cuenta regresiva
const countdownDate = new Date("Marzo 15, 2025 17:00:00").getTime();

// Actualiza la cuenta regresiva cada 1 segundo
const x = setInterval(function() {
    
    // Obtiene la fecha y hora actual
    const now = new Date().getTime();
    
    // Calcula la diferencia entre la fecha actual y la fecha de la cuenta regresiva
    const distance = countdownDate - now;
    
    // Cálculos de días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Muestra los resultados en los elementos con los IDs respectivos
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // Si la cuenta regresiva termina, muestra un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡La cuenta regresiva ha terminado!";
    }
}, 1000);
   